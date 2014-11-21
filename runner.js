#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('stylist')

var problems = [ 'blue-steel' ]
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) })
})

shop.execute(process.argv.slice(2))
