'use strict';
var es = require('event-stream');;
var gutil = require('gulp-util');
var htmlClean = require('htmlclean');

module.exports = function() {
  return es.map(function (file, cb) {
    file.contents = new Buffer(htmlClean(file.contents.toString()));
    cb(null,file);
  });
};
