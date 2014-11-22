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
    var box = document.getElementById('box')
    var boxStyle = window.getComputedStyle(box)

    var width = box.offsetWidth + parseInt(boxStyle['margin-left']) + parseInt(boxStyle['margin-right'])
    var height = box.offsetHeight + parseInt(boxStyle['margin-top']) + parseInt(boxStyle['margin-bottom'])

    if (width != 200) {
      return new Error('Width "' + width + '" is not 200px')
    }

    if (height != 100) {
      return new Error('Height "' + height + '" is not 100px')
    }

    var properties = [
      'margin-top',
      'border-top',
      'padding-top',
      'height',
      'padding-bottom',
      'border-bottom',
      'margin-bottom',
      'margin-left',
      'border-left',
      'padding-left',
      'width',
      'padding-right',
      'border-right',
      'margin-right'
    ]

    for (var i = 0; i < properties.length; i++) {
      if (parseInt(boxStyle[properties[i]]) == 0) {
        return new Error(properties[i] + ' not set')
      }
    }
  })

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit(error ? 500 : 0)
})