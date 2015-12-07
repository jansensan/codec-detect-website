var config = require('../gulp-config')(),
  gulp = require('gulp'),
  del = require('del'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('clean:dist', cleanDistDir);

// method definitions
function cleanDistDir() {
  return del.sync(config.paths.distDir);
}