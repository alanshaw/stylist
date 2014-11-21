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
    var importants = document.querySelectorAll('.important')

    for (var i = 0; i < importants.length; i++) {
      var weight = window.getComputedStyle(importants[i])['font-weight']

      if (weight != 'bold') {
       return new Error('"' + weight + '" is not "bold"')
      }
    }

    var title = document.getElementById('title')
    var size = window.getComputedStyle(title)['font-size']
    var color = window.getComputedStyle(title)['color']

    if (size != '48px') {
      return new Error('"' + size + '" is not "48px"')
    }

    if (color != 'rgb(128, 0, 128)') {
      return new Error('"' + color + '" is not "purple"')
    }
  })

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  phantom.exit(error ? 500 : 0)
})