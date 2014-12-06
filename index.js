var adventure = require('adventure')
var shop = adventure({name: 'stylist', fg: 'white', bg: 'magenta'})

var problems = [
  'blue-steel',
  'bo-selecta',
  'the-descendents',
  'boxtastic',
  'unit-shifter',
  'position-is-everything'
]

problems.forEach(function (prob) {
  var name = prob.toUpperCase().replace(/-/g, ' ')
  shop.add(name, function () { return require('./problems/' + prob) })
})

module.exports = shop
