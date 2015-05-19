var gulp = require('gulp'),
    concat = require("gulp-concat"),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


//var paths = {
//    cssfiles : [
//        //"./bower_components/bootstrap/dist/css/*.min.css",
//        "./css/*.css"
//    ],
//    jsfiles : [
//        "./bower_components/jquery/dist/*.min.js",
//        "./bower_components/jquery-ui/*.min.js",
//        "./bower_components/jquery-mockjax/*.js",
//        "./bower_components/bootstrap/dist/js/*.min.js",
//        "./js/style.js"
//    ],
//    json : "./sample.json",
//    less : "./less/*.less"
//};
//
//
//gulp.task('js', function(){
//    return gulp.src(paths.jsfiles)
//        .pipe(concat('bundle.js'))
//        .pipe(gulp.dest('./demo/'));
//});
//
//gulp.task('watch', function () {
//    gulp.watch(paths.less, ['css', 'css-dist-min']);
//    gulp.watch(paths.jsfiles, ['js', 'js-dist-min', 'js-dist-full']);
//});



gulp.task("default", ["watch"]);