var gulp = require('gulp');
var rigger  = require('gulp-rigger');
var log = require('fancy-log');
log('Hello world!');

gulp.task('default', function () {
  return new Promise(function(resolve, reject) {
    gulp.src('./layouts/*.html')
		.pipe(rigger('layouts'))
		.pipe(gulp.dest('build/'));
    resolve();
  });
});
