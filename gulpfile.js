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
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task('scss', function () {
    return gulp.src('LVS/assets/scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('LVS/assets/css'))
    gulp.task('minify');
});

gulp.task('minify', ['scss'], function () {
    del(['LVS/assets/css/*.css', '!LVS/assets/css/style.css']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    gulp.src('LVS/assets/css/**/style.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('LVS/assets/css'))
});


gulp.task('watch', function () {
    gulp.watch('LVS/assets/scss/**/*.scss', ['scss']);
    // Other watchers
})

gulp.task('default', ['scss', 'minify', 'watch']);