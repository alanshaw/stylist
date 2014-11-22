var system = require('system')
var fs = require('fs')
var page = require('webpage').create()

page.open(system.args[1], function () {
  var css = ''

  try {
    css = fs.read(system.args[2])
  } catch (er) {
    console.error(er)
    phantom.exit(404)
  }

  console.log(css)

  // Add the CSS
  page.evaluate(function (css) {
    var style = document.createElement('style')
    style.type = 'text/css'
    style.textContent = css
    document.head.appendChild(style)
  }, css)

  // Verify the solution
  var error = page.evaluate(function () {
    var navLinks = [].slice.call(document.querySelectorAll('nav a'))

    for (var i = 0; i < navLinks.length; i++) {
      var styles = window.getComputedStyle(navLinks[i])
      var weight = styles['font-weight']
      var size = styles['font-size']
      var color = styles['color']
      var style = styles['font-style']

      if (weight != 'bold') {
       return new Error('Navigation link font-weight "' + weight + '" is not "bold"')
      }

      if (size != '32px') {
       return new Error('Navigation link font-size "' + size + '" is not "32px"')
      }

      if (color != 'rgb(0, 128, 0)') {
       return new Error('Navigation link color "' + color + '" is not "green"')
      }

      // Gotcha - make sure the inheritance doesn't bite
      if (style != 'normal') {
       return new Error('Navigation link font-style "' + style + '" is not "normal"')
      }
    }

    var links = [].filter.call(document.querySelectorAll('a'), function (a) {
      return navLinks.indexOf(a) == -1
    })

    for (var i = 0; i < links.length; i++) {
      var styles = window.getComputedStyle(links[i])
      var style = styles['font-style']
      var color = styles['color']

      if (color != 'rgb(255, 0, 0)') {
       return new Error('Link color "' + color + '" is not "red"')
      }

      if (style != 'italic') {
       return new Error('Link font-style "' + style + '" is not "italic"')
      }
    }
  })

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit(error ? 500 : 0)
})