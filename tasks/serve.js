var config = require('../gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('serve:dev', serveDev);

// method definitions
function serveDev() {
  return gulp
    .src(config.paths.distDir)
    .pipe(glp.webserver({
      livereload: true,
      host: 'local.codecdetect.com',
      port: 6400,
      fallback: 'index.html',
      open: true
    }))
}
