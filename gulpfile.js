// Source: https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
});


gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(concat('styles.css'))
      .pipe(gulp.dest('app/css/'))
      .pipe(browserSync.reload({
        stream: true
      }))
});


gulp.task('watch', gulp.series(['browserSync', 'sass']), function (){
    gulp.watch('app/scss/*.scss', gulp.series(['sass'])); 
    gulp.watch('app/*.html', browserSync.reload);
    // Other watchers
  });