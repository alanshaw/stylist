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
    var bgColor = window.getComputedStyle(document.body)['background-color']

    if (bgColor != 'rgb(70, 130, 180)') {
      return new Error('"' + bgColor + '" is not "steelblue"')
    }
  })

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit(error ? 500 : 0)
})