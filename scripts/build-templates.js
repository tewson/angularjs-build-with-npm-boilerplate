'use strict'

var fs = require('fs')
var globAll = require('glob-all')
var ngHtml2Js = require('ng-html2js')

var basePath = 'src/'

var filePaths

try {
  filePaths = globAll.sync(basePath + '**/*.view.html')

  var output = 'angular.module(\'app.templates\', []);'

  filePaths.forEach(function (filePath) {
    var content = fs.readFileSync(filePath, 'utf8')
    var templateUrl = filePath.substr(basePath.length)

    // Using ng-html2js still generates unnecessary code where it tries to
    // load the template module for every template file.
    // This can be fixed by writing something like gulp-ng-templates but
    // for CLI.
    output = output + ngHtml2Js(templateUrl, content, 'app.templates')
  })

  fs.writeFileSync('build/templates.bundle.js', output)
} catch (error) {
  console.error(error)
}
