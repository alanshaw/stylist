var fs = require('fs')
var path = require('path')
var execFile = require('child_process').execFile
var phantomjs = require('phantomjs')

exports.problem = fs.createReadStream(path.join(__dirname, 'problem.md'))
exports.solution = fs.createReadStream(path.join(__dirname, 'solution.md'))

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
