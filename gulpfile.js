//const { src, dest } = require("gulp");
const gulp = require('gulp');
const testcafe = require('gulp-testcafe');
const fs = require('fs');

gulp.task('default', () => {
  return gulp.src('src/tests/**/*.js')
    .pipe(testcafe({ browsers: ['chrome', 'firefox'] }));
});

gulp.task('burger', () => {
  return gulp.src('src/tests/burgerbuilderTest.js')
    .pipe(testcafe({ browsers: ['chrome'], reporter: [{ "name": "spec" }, { "name": "json", "output": "reports/report.json" }] }));
});


gulp.task('todo', () => {
  return gulp.src('src/tests/todo.js')
    .pipe(testcafe({ browsers: ['firefox'], reporter: [{ "name": "spec" }, { "name": "xunit", "output": fs.createWriteStream("reports/report.xml") }] }));
});