var gulp = require('gulp'),

    sass      = require('gulp-sass'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    plumber   = require('gulp-plumber'),
    connect   = require('gulp-connect'),

    sourcemaps = require('gulp-sourcemaps');

var errorHandler = function(err) {
  console.log(err);
};

// Server
gulp.task('server', function () {
  connect.server({
    root: './public',
    port: 3000,
    fallback: './public/index.html',
    livereload: true
  });
});

// Scripts
gulp.task('scripts', function () {
  gulp.src('./app/scripts/**/*.js')
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
    .pipe(connect.reload());
});

// Styles
gulp.task('styles', function () {
  gulp.src('./app/styles/**/*.scss')
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./app/scripts/**/*.js', ['scripts']);
  gulp.watch('./app/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['server', 'styles', 'scripts', 'watch']);