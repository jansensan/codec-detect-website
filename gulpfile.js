// include gulp and plugins
var config = require('./gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true}),
  requireDir = require('require-dir'),
  runSequence = require('run-sequence');

// get environment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// require tasks directory
requireDir('./tasks', {recurse: true});

// tasks
gulp.task('help', glp.taskListing);
gulp.task('default', ['help']);
gulp.task('build:dev', buildDev);
gulp.task('dev', buildAndServeDev);

// method definitions
function buildDev() {
  runSequence(
    'clean:dist',
    'copy:vendors',
    'copy:vendor-styles',
    'copy:images',
    'copy:php',
    'build:less',
    'build:templateCache',
    'build:app',
    'copy:index'
  );
}

function buildAndServeDev() {
  runSequence(
    'clean:dist',
    'copy:vendors',
    'copy:vendor-styles',
    'copy:images',
    'copy:php',
    'build:less',
    'build:templateCache',
    'build:app',
    'copy:index',
    'serve:dev'
  );
  // TODO: add watch to live reload on sources changed
}