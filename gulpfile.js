"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('browser-sync').create();

// Tasks
gulp.task('css', function() {
    return gulp.src('source/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
    console.log('kek');
    return gulp.src('source/html/*.html')
        .pipe(gulp.dest('dist'));
});

// BrowserSync
gulp.task('server', function (cb) {
    server.init({
        server: 'dist',
        notify: false,
        open: true,
        cors: true
    });

    gulp.series('css', 'html');

    gulp.watch('source/scss/**/*.scss', gulp.series('css'))
        .on('change', server.reload);

    gulp.watch('source/html/*.html', gulp.series('html'))
        .on('change', server.reload);

    return cb();
});