var gulp = require('gulp');
var runSequence = require('run-sequence');
var concat = require("gulp-concat");
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer'); // Automatically adds browser prefixes to css
var data_uri = require('gulp-base64'); //Gulp task for converting all files found within a stylesheet (those within a url( ... ) declaration) into base64-encoded data URI strings.


gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

// move loader.css required files into sass/loader
gulp.task('moveLoaders',  function() {
    gulp.src("bower_components/loaders.css/src/_variables.scss")
        .pipe(gulp.dest('sass/loaders/'));
    gulp.src("bower_components/loaders.css/src/_mixins.scss")
        .pipe(gulp.dest('sass/loaders/'));
    gulp.src("bower_components/loaders.css/src/_functions.scss")
        .pipe(gulp.dest('sass/loaders/'));
    gulp.src("bower_components/loaders.css/src/animations/ball-pulse.scss")
        .pipe(rename('_ball-pulse.scss'))
        .pipe(gulp.dest('sass/loaders/animations/'));

    gulp.src("bower_components/loaders.css/src/animations/ball-scale.scss")
        .pipe(rename('_ball-scale.scss'))
        .pipe(gulp.dest('sass/loaders/animations/'));
});


gulp.task('buildCSS', function () {
    return sass('sass', {style:'expanded'})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer('> 1%'))
        .pipe(data_uri())
        .pipe(gulp.dest('css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(rename('base.min.css'))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('sass/*.scss', ['buildCSS']);
});


gulp.task('build', function() {
    runSequence('moveLoaders', 'buildCSS');
});

gulp.task('default', ['webserver', 'build', 'watch']);
