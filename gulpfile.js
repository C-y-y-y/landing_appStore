'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var deploy = require('gulp-gh-pages');

gulp.task('pug', function() {
  return gulp.src('./views/frontend/*.pug')
      .pipe(pug({
        pretty:true
      }))
      .pipe(gulp.dest('build'));
});

gulp.task('deploy', function () {
  return gulp.src('../dist/**/*')
    .pipe(deploy());
});

var build = require('gulp-build');
 
gulp.task('build', async function() {
  gulp.src('scripts/*.js')
      .pipe(build({}))
      .pipe(gulp.dest('dist'));
});
