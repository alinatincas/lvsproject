var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('scss', function () {
    return gulp.src('LVS/assets/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 6', 'ie 10', 'ie 11'))
        .pipe(gulp.dest('LVS/assets/css'))
});

gulp.task('minify', function () {
    gulp.src('LVS/assets/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 6', 'ie 10', 'ie 11'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('LVS/assets/css'))
});


gulp.task('watch', function () {
    gulp.watch('LVS/assets/scss/**/*.scss', ['scss']);
    // Other watchers
})

gulp.task('default', ['scss', 'minify', 'watch']);