var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('scss', function () {
    return gulp.src('LVS/assets/scss/style.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('LVS/assets/css'))
});

gulp.task('watch', function () {
    gulp.watch('LVS/assets/scss/**/*.scss', ['scss']);
    // Other watchers
})