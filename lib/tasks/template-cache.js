var config = require('../gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('build:templateCache', buildTemplateCache);

// method definitions
function buildTemplateCache() {
  return gulp
    .src(config.filesets.templateSources)
    .pipe(glp.minifyHtml({empty: true}))
    .pipe(glp.angularTemplatecache(
      config.templateCache.file,
      config.templateCache.opts
    ))
    .pipe(gulp.dest(config.paths.jsDir));

}