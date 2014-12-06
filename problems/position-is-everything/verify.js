var system = require('system')
var fs = require('fs')
var page = require('webpage').create()

page.viewportSize = {width: 640, height: 480}

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
    var subMenus = document.querySelectorAll('nav ul ul')

    for (var i = 0; i < subMenus.length; i++) {
      var parentItem = subMenus[i].parentNode

      parentItem.className = 'show'

      var parentItemStyle = window.getComputedStyle(parentItem)
      var subMenuStyle = window.getComputedStyle(subMenus[i])

      if (parentItemStyle.position != 'relative') {
        return new Error('Menu list item position "' + parentItemStyle.position + '" is not relative')
      }

      if (subMenuStyle.position != 'absolute') {
        return new Error('Sub-menu list item position "' + subMenuStyle.position + '" is not absolute')
      }

      if (parseInt(subMenuStyle.top) != 30) {
        return new Error('Sub-menu list item top "' + subMenuStyle.top + '" is not 30px')
      }

      parentItem.className = ''
    }
  })

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit(error ? 500 : 0)
})