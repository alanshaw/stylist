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

  var error

  if (css.indexOf('px') > -1) {
    error = new Error('"px" units are not allowed')
  } else {

    // Verify the solution
    error = page.evaluate(function () {
      var h1s = document.getElementsByTagName('h1')

      for (var i = 0; i < h1s.length; i++) {
        var fontSize = window.getComputedStyle(h1s[i])['font-size']

        if (fontSize != '48px') {
          return new Error('h1 font size "' + fontSize + '" is not 48px')
        }
      }

      var h1Spans = document.querySelectorAll('h1 span')

      for (var i = 0; i < h1Spans.length; i++) {
        var fontSize = window.getComputedStyle(h1Spans[i])['font-size']

        if (fontSize != '24px') {
          return new Error('h1 span font size "' + fontSize + '" is not 24px')
        }
      }

      var h2s = document.getElementsByTagName('h2')

      for (var i = 0; i < h2s.length; i++) {
        var fontSize = window.getComputedStyle(h2s[i])['font-size']

        if (fontSize != '48px') {
          return new Error('h2 font size "' + fontSize + '" is not 48px')
        }
      }

      var h2Spans = document.querySelectorAll('h2 span')

      for (var i = 0; i < h2Spans.length; i++) {
        var fontSize = window.getComputedStyle(h2Spans[i])['font-size']

        if (fontSize != '32px') {
          return new Error('h2 span font size "' + fontSize + '" is not 32px')
        }
      }

      var h2SpanEms = document.querySelectorAll('h2 span em')

      for (var i = 0; i < h2SpanEms.length; i++) {
        var fontSize = window.getComputedStyle(h2SpanEms[i])['font-size']

        if (fontSize != '16px') {
          return new Error('h2 span em font size "' + fontSize + '" is not 16px')
        }
      }
    })
  }

  if (error) console.error('\n\033[31mERROR:\033[0m', error.message)

  page.render(system.args[2].replace('.css', '') + '.jpg')

  phantom.exit(error ? 500 : 0)
})