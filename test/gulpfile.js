var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var plumber = require('gulp-plumber');


gulp.task('sass', function () {
    gulp.src('assets/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function () {
    gulp.src('assets/js/**/*.js')
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('img', function () {
	return gulp.src('assets/img/**/*')
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}))

});
gulp.task('fonts', function () {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
	return gulp.src("assets/**/*.html")
		.pipe(gulp.dest("build"))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img' , 'js', 'fonts'], function () {
	browserSync.init({
        port: 9999,
		server: {
        baseDir: 'build',
    }
    });
    gulp.watch('assets/scss/**/*.scss', ["sass"]);
    gulp.watch('assets/**/*.html' , ['html']);
	gulp.watch('assets/img/**/*', ["img"]);
    gulp.watch('assets/fonts/**/*', ["fonts"]);
    gulp.watch('assets/js/**/*', ["js"]);
});
