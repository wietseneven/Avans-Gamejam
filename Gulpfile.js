'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('default', ['sass', 'watch', 'browser-sync']);

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/assets/styles'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  // gulp.watch('./src/js/**/*.*', ['scripts']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: "http://localhost:7933",
    files: ["public/**/*.*"],
    browser: "google chrome",
    port: 3000,
  });
});
gulp.task('nodemon', (cb) => {

  var started = false;

  return nodemon({
    script: 'app.js'
  }).on('start', () => {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});