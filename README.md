# gulp-cleanhtml [![NPM version][npm-image]][npm-url] [![Build Status](https://travis-ci.org/hemanth/gulp-cleanhtml.svg?branch=master)](https://travis-ci.org/hemanth/gulp-cleanhtml)

> Cleans your HTML using [htmlclean](https://github.com/anseki/htmlclean)

## Usage

First, install `gulp-cleanhtml` as a development dependency:

```shell
npm install --save-dev gulp-cleanhtml
```

Then, add it to your `gulpfile.js`:

```javascript
var cleanhtml = require('gulp-cleanhtml');

gulp.task('default', function(){
  gulp.src('index.html')
    .pipe(cleanhtml())
    .pipe(gulp.dest('build/index.html'));
});
```
The above will remove unneeded whitespaces, line-breaks, comments, etc from the HTML. 


[npm-url]: https://npmjs.org/package/gulp-cleanhtml
[npm-image]: https://badge.fury.io/js/gulp-repl.png

