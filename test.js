var fs = require('fs')
var os = require('os')
var path = require('path')
var shop = require('./')

var solutionPaths = {}

shop._adventures.forEach(function (prob, i) {
  console.log(prob.name)

  var solution = fs.readFileSync(path.join(
    __dirname,
    'problems',
    prob.name.toLowerCase().replace(/ /g, '-'),
    'solution.md'
  ), 'utf8')

  solutionPaths[prob.name] = path.join(os.tmpdir(), 'stylist' + Date.now() + i)

  console.log(solutionPaths[prob.name] + '.css')

  fs.writeFileSync(
    solutionPaths[prob.name] + '.css',
    solution
      .replace("Here's the reference solution, if you're interested:", '')
      .replace('But your solution is probably good too.', ''))

  shop.verify([solutionPaths[prob.name] + '.css'], prob.name)
})

shop.on('pass', cleanUp)

shop.on('fail', function (name) {
  cleanUp(name)
  console.log('Failed verify', name)
  process.exit(8)
})

function cleanUp (name) {
  console.log('clean up', name)
  fs.unlinkSync(solutionPaths[name] + '.css')
  fs.unlinkSync(solutionPaths[name] + '.jpg')
}