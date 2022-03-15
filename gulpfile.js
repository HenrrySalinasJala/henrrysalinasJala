const gulp = require('gulp');
const testcafe = require('gulp-testcafe');
const fs = require('fs');

gulp.task('default', () => gulp.src('src/tests/**/*.js')
  .pipe(testcafe({ browsers: ['chrome', 'firefox'] })));

gulp.task('burger', () => gulp.src('src/tests/burgerbuilderTest.js')
  .pipe(testcafe({ browsers: ['chrome'], reporter: [{ name: 'spec' }, { name: 'json', output: 'reports/report.json' }] })));

gulp.task('todo', () => gulp.src('src/tests/todo.js')
  .pipe(testcafe({ browsers: ['firefox'], reporter: [{ name: 'spec' }] })));
