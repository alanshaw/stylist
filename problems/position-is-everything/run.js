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

  page.evaluate(function () {
    var subMenu = document.querySelector('nav ul ul')
    subMenu.parentNode.className = 'show'
  })

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit()
})