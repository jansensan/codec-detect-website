var config = require('../gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('build:less', compileLESS);

// method definitions
function compileLESS() {
  var sources = config.filesets.lessSources;
  var target = config.paths.stylesDir;

  return gulp
    .src(config.filesets.lessSources)
    .pipe(glp.plumber())
    .pipe(glp.less())
    .pipe(gulp.dest(config.paths.stylesDir));
}