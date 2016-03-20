var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var copy = require('gulp-contrib-copy');
var serve = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['clean'], function () {
  runSequence(['sass', 'copy'], 'serve');
});

gulp.task('copy', function () {
  return gulp.src(['src/**/*.html', 'src/**/*.js', 'src/**/*.jpeg', 'src/**/*.png'])
    .pipe(copy())
    .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function () {
  serve.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/**/*.*', ['copy']).on('change', serve.reload);
});

gulp.task('default', ['build']);
