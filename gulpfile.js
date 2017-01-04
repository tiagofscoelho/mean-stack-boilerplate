'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');


gulp.task('sass:watch', function () {
  gulp.watch('./app/components/**/*.scss', ['dev:sass']);
});

gulp.task('dev', function(){
  runSequence('dev:sass', 'dev:inject');
});

gulp.task('dev:sass', function () {
  return gulp.src('./app/components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles'));
});

gulp.task('dev:inject', function () {
  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(inject(gulp.src('./app/components/**/*.{css,js}', {read: false}), {relative: true}))
    .pipe(gulp.dest('./app'));
});
