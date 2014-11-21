#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure({name: 'stylist', fg: 'white', bg: 'magenta'})

var problems = [
  'blue-steel',
  'pick-and-choose',
  'the-descendents'
]

problems.forEach(function (prob) {
  var name = prob.toUpperCase().replace(/-/g, ' ')
  shop.add(name, function () { return require('./problems/' + prob) })
})

shop.execute(process.argv.slice(2))
