var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

gulp.task('serve', ['pug', 'sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false,
        online: false,
        notify: false
    });

    gulp.watch('*.pug', ['pug']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch(['*.html', 'js/*.js']).on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('scss/**')
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['scss']
        }))
        .pipe(prefix(['last 15 versions'], { cascade: true }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('pug', function () {
    return gulp.src('*.pug')
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['serve']);
