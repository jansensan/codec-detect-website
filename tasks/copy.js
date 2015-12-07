var config = require('../gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('copy:vendors', copyVendors);
gulp.task('copy:vendor-styles', copyVendorStyles);
gulp.task('copy:images', copyImages);
gulp.task('copy:index', copyIndex);
gulp.task('copy:php', copyPHP);

// method definitions
function copyVendors() {
  var src = config.filesets.bowerFiles.depends;
  var target = config.paths.distDir.concat('scripts/vendors/');

  return gulp
    .src(src)
    .pipe(gulp.dest(target));
}

function copyVendorStyles() {
  var h5bCSSDir = 'bower_components/html5-boilerplate/dist/css/';
  var sources = [
    h5bCSSDir.concat('normalize.css'),
    h5bCSSDir.concat('main.css')
  ];
  var target = config.paths.distDir.concat('assets/styles/vendors/');

  return gulp
    .src(sources)
    .pipe(gulp.dest(target));
}

function copyImages() {
  return gulp
    .src(config.filesets.images)
    .pipe(gulp.dest(config.paths.imagesDir));
}

function copyIndex() {
  return gulp
    .src(config.filesets.html)
    .pipe(gulp.dest(config.paths.distDir));
}

function copyPHP() {
  return gulp
    .src(config.filesets.phpSources)
    .pipe(gulp.dest(config.paths.phpDir));
}