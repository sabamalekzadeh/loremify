var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var rtlcss = require('gulp-rtlcss');

gulp.task('css', function(){
    return gulp.src('src/less/app.less')
      .pipe(less())
      .pipe(rtlcss())
      .pipe(gulp.dest('static/styles'))
});

var jsPath = {
    jQuery : './node_modules/jquery/dist/jquery.min.js',
    boostrapJS : './node_modules/bootstrap/dist/js/bootstrap.min.js',
    toastR : './node_modules/toastr/build/toastr.min.js',
    allJs : 'src/js/*.js'
}

gulp.task('js',function(){
    return gulp.src([jsPath.jQuery,jsPath.boostrapJS,jsPath.toastR,jsPath.allJs])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('static/scripts'))
})