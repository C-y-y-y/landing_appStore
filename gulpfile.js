'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var deploy = require('gulp-gh-pages');

gulp.task('pug', function() {
  return gulp.src('./views/frontend/*.pug')
      .pipe(pug({
        pretty:true
      }))
      .pipe(gulp.dest('views/compile'));
});

gulp.task('deploy', function () {
  return gulp.src('../dist/**/*')
    .pipe(deploy());
});

var build = require('gulp-build');
const { src, dest } = require('gulp');
 
// function build() {
//   return src([
//     'views/compile/*.html',
//     'views/public/images/*',
//     'views/scripts/main.min.js',
//     'views/styles/*.css',
//   ], {base: 'views'})
//     .pipe(dest('dist'))
// }

gulp.task('build', function () {
  return gulp.src([
    'views/compile/*.html',
    'views/public/images/*',
    'views/scripts/main.min.js',
    'views/styles/*.css',
  ])
    .pipe(dest('dist'));
});

// exports.build = build;
