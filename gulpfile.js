var gulp        = require('gulp'),
    babelify    = require('babelify'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buff        = require('vinyl-buffer'),
    sass        = require('gulp-sass'),
    minifyCSS   = require('gulp-minify-css'),
    prefixer    = require('gulp-autoprefixer'),
    copy        = require('gulp-copy'),
    uglify      = require('gulp-uglify'),
    watch       = require('gulp-watch'),
    ghPages     = require('gulp-gh-pages')
    img         = require('gulp-imagemin'),
    size        = require('gulp-size');

gulp.task ('default', ['styles', 'scripts', 'img', 'html']);

gulp.task ('styles', function () {
  return gulp
  .src('./src/sass/**/*.sass')
  .pipe(sass({
    indentedSyntax: true
  }))
  .pipe(prefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/assets/css/'));
});

gulp.task ('scripts', function () {
  browserify({
    entries: './src/js/main.js',
    debug: true
    })
  .transform(babelify)
  .bundle()
  .pipe(source('script.min.js'))
  .pipe(buff())
  .pipe(uglify())
  .pipe(gulp.dest('./build/assets/js/'));
});

gulp.task('html', function() {
  return gulp
  .src('./src/html/*')
  .pipe(copy('./build/', {
    prefix: 2
  }));
});

gulp.task('img', function() {
  return gulp
  .src('./src/img/*')
  .pipe(img())
  .pipe(gulp.dest('./build/assets/img/'));
});

gulp.task('deploy', ['default'], function() {
  return gulp
  .src('./build/**/*')
  .pipe(ghPages({
    message: 'Deploy on gh-pages',
    force: true
    }));
});

gulp.task ('watch', ['default'], function () {
  gulp.watch('./src/js/**/*', ['scripts']);
  gulp.watch('./src/sass/**/*', ['styles']);
  gulp.watch('./src/html/*', ['html']);
});
