"use strict";

const gulp = require('gulp');
const server = require('browser-sync').create();
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


// BrowserSync
gulp.task('server', function (cb) {
    server.init({
        server: 'dist/'
    });

    gulp.series('css', 'html');

    gulp.watch('source/scss/**/*.scss', ['css']);

    gulp.watch('source/html/*.html', gulp.series('html'))
        .on('change', server.reload);

    return cb();
});

// Tasks
gulp.task('css', function() {
    return gulp.src('source/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('dist/css'))
        .pipe(server.stream());
});

gulp.task('html', function() {
    console.log('kek');
    return gulp.src('source/html/*.html')
        .pipe(gulp.dest('dist'));
});