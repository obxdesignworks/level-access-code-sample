'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const sassOpts = {
  src: './assets/scss/style.scss',
  dest: './assets/css'
};

const jsOpts = {
  src: './assets/js/src/**/*.js',
  dest: './assets/js'
};
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(sassOpts.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(sassOpts.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('scripts:custom', function () {  
  return gulp.src(jsOpts.src)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(jsOpts.dest))
});

gulp.task('default', function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
  gulp.watch(jsOpts.src, gulp.series('scripts:custom'));
});
