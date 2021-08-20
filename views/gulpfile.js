'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('./frontend/*.pug')
      .pipe(pug({
        pretty:true
      }))
      .pipe(gulp.dest('build'));
})

var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src('./build/*')
    .pipe(deploy())
});
