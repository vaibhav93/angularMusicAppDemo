var gulp = require('gulp'),
    connect = require('gulp-connect');

//default task
gulp.task('default', ['server']);

//conenct server
gulp.task('server', function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port:9000
    });
});

