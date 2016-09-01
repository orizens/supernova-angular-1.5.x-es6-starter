var gulp = require('gulp');
var dogen = require('gulp-dogen');

dogen.config({
  templatesPath: 'config/templates',
  gulp: gulp
});

// This will create this gulp task as:
// gulp dogen --ngmodule the-name-of-module
dogen.task('ngmodule', 'src/components/');
dogen.task('ngservice', 'src/core/services');
