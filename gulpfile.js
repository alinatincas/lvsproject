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
    return gulp.src('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/scss/style.scss')
        // compailer    
        .pipe(sass())
        .on('error', onError)
        // autoprefixing
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        // saving
        .pipe(gulp.dest('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css'))

});

// compaile bootstrap scss
gulp.task('bootstrap', function () {
    // load files
    return gulp.src('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/scss/bootstrap/bootstrap.scss')
        // compailer    
        .pipe(sass())
        .on('error', onError)

        // autoprefixing
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        // saving
        .pipe(gulp.dest('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css'))

});


// runs scss task before it can minify
gulp.task('minify', ['scss'], function () {

    //load and delete the old style.min.css
    del(['NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/style.css', '!NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/style.css']).then(paths => {
        //console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    // load file
    gulp.src('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/**/style.css')
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
        .pipe(gulp.dest('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css'))
});

gulp.task('miniboot', ['bootstrap'], function () {

    //load and delete the old style.min.css
    del(['NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/bootstrap.css', '!NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/bootstrap.css']).then(paths => {
        //console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    // load file
    gulp.src('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css/**/bootstrap.css')
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
        .pipe(concat('bootstrap.min.css'))
        //create map
        .pipe(sourcemaps.write())
        //create save file
        .pipe(gulp.dest('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/css'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'html'
        },
    })
})

gulp.task('watch', ['scss'], function () {
    gulp.watch('NEW_UMBRACO LVS/UmbracoLVS/UmbracoLVS/assets/scss/**/*.scss', ['scss']);

})

gulp.task('prod', ['minify', 'miniboot'], function () {
    console.log('Files generated');
})

gulp.task('default', ['minify', 'watch', 'browserSync'], function () {
    //console.log('Running Gulp ...');
})

function onError(err) {
    console.log(err);
    this.emit('end');
}