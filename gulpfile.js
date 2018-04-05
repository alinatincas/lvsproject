var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var browserSync = require('browser-sync').create();

// compaile scss
gulp.task('scss', function () {
    // load files
    return gulp.src('html/assets/scss/style.scss')
        // compailer    
        .pipe(sass())
        .on('error', onError)
        // autoprefixing
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        // saving
        .pipe(gulp.dest('html/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))

});


// runs scss task before it can minify
gulp.task('minify', ['scss'], function () {

    //load and delete the old style.min.css
    del(['html/assets/css/*.css', '!html/assets/css/style.css']).then(paths => {
        //console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    // load file
    gulp.src('html/assets/css/**/style.css')
        //minify    
        .pipe(minifyCSS())
        //auto prefix
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // start create map
        .pipe(sourcemaps.init())
        //init change name
        .pipe(concat('style.min.css'))
        //create map
        .pipe(sourcemaps.write())
        //create save file
        .pipe(gulp.dest('html/assets/css'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'html'
        },
    })
})

gulp.task('watch', ['browserSync', 'scss'], function () {
    gulp.watch('html/assets/scss/**/*.scss', ['scss']);
    gulp.watch('html/*.html', browserSync.reload);
    gulp.watch('html/assets/js/**/*.js', browserSync.reload);

})

gulp.task('default', ['minify', 'watch', 'browserSync'], function () {
    //console.log('Running Gulp ...');
})

function onError(err) {
    console.log(err);
    this.emit('end');
}