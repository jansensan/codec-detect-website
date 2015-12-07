var config = require('../gulp-config')(),
  gulp = require('gulp'),
  glp = require('gulp-load-plugins')({lazy: true});

// tasks
gulp.task('build:app', buildApp);

// method definitions
function buildApp() {
  // var filename = 'codec-detect-website-' + getTimestamp() + '.js';
  var filename = 'codec-detect-website.js';
  var target = config.paths.distDir.concat('scripts/js/');

  return gulp
    .src(config.filesets.jsSources)
    .pipe(glp.concat(filename))
    .pipe(gulp.dest(target));
}

function getTimestamp() {
  var now = new Date();
  var month = (now.getMonth() + 1).toString();
  if (month.length < 2) {
    month = '0'.concat(month);
  }
  var day = now.getDate().toString();
  if (day.length < 2) {
    day = '0'.concat(day);
  }
  var hours = now.getHours().toString();
  if (hours.length < 2) {
    hours = '0'.concat(hours);
  }
  var minutes = now.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = '0'.concat(minutes);
  }
  var timestamp = now.getFullYear().toString() + '-' + month + '-' + day + '-' + hours + minutes;
  return timestamp;
}