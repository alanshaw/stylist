var fs = require('fs')
var path = require('path')
var execFile = require('child_process').execFile
var phantomjs = require('phantomjs')
var msee = require('msee')

exports.problem = msee.parseFile(path.join(__dirname, 'problem.md'), {collapseNewlines: false})
exports.solution = msee.parseFile(path.join(__dirname, 'solution.md'), {collapseNewlines: false})

exports.verify = function (args, cb) {
  var verifyScriptPath = path.join(__dirname, 'verify.js')
  var verifyHtmlPath = path.join(__dirname, 'verify.html')
  var solutionCssPath = path.resolve(args[0])

  var childArgs = [verifyScriptPath, verifyHtmlPath, solutionCssPath]

  execFile(phantomjs.path, childArgs, function (er, stdout, stderr) {
    if (stdout) console.log(stdout)
    if (stderr) console.error(stderr)
    if (er) return cb(false)
    cb(true)
  })
}

exports.run = function (args) {
  var verifyScriptPath = path.join(__dirname, 'run.js')
  var verifyHtmlPath = path.join(__dirname, 'verify.html')
  var solutionCssPath = path.resolve(args[0])

  var childArgs = [verifyScriptPath, verifyHtmlPath, solutionCssPath]

  execFile(phantomjs.path, childArgs, function (er, stdout, stderr) {
    if (stdout) console.log(stdout)
    if (stderr) console.error(stderr)
  })
}