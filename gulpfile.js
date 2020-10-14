var gulp = require('gulp');
var sass = require('gulp-sass');

//compile 
gulp.task('sass', function () { 
    return gulp.src('public/sass/*.scss') 
    .pipe(sass()) 
    .pipe(gulp.dest('public/css')); 
});

// Watch and live reload - THIS IS BROKEN AND DOESNT WORK
gulp.task('watch', function() {
    gulp.watch('public/sass/**/*/*.scss', ['sass']);
});