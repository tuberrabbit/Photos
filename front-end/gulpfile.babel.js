const gulp = require('gulp')
const babel = require('gulp-babel')
const copy = require('gulp-contrib-copy')
const del = require('del')

gulp.task('clean', ()=> {
    del('dist')
})

gulp.task('build', () => {
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('copy', ()=> {
    gulp.src('src/index.html')
        .pipe(copy())
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['clean', 'build', 'copy'])