/* Servidor web gulp para desarrollo 
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('run', function() {
    connect.server({
        port: 4000,
        host: 'localhost'
    });
});
