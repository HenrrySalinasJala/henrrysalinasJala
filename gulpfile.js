const gulp = require('gulp')
const testcafe = require('gulp-testcafe')
const fs = require('fs')
const path = require('path')

const filePathSettings = path.join(__dirname, '/screenshots/')
const screenshotPattern = '${DATE}_${TIME}/${BROWSER}-${BROWSER_VERSION}'
  + '/${FIXTURE}/test-${TEST}/${QUARANTINE_ATTEMPT}/${FILE_INDEX}.png'

const screenshots = {
  path: filePathSettings,
  takeOnFails: true,
  pathPattern: screenshotPattern,
  fullPage: true,
}

const defaultExecutionConfig = {
  screenshots,
  takeScreenshotsOnFail: true,
  assertionTimeout: 7000,
  pageLoadTimeout: 8000,
  quarantineMode: false,
  speed: 1,
  skipJsErrors: true,
  skipUncaughtErrors: true,
  disableMultipleWindows: true,
  browserInitTimeout: 600000,
  disablePageCaching: true,
  hostname: 'localhost',
}

gulp.task('default', () => gulp.src('src/tests/**/*.js')
  .pipe(testcafe({ browsers: ['chrome', 'firefox'] })))

gulp.task('burger', () => gulp.src('src/tests/burgerbuilderTest.js')
  .pipe(testcafe({ browsers: ['chrome'], reporter: [{ name: 'spec' }, { name: 'json', output: 'reports/report.json' }] })))

gulp.task('test', () => gulp.src('src/tests/business.aa.com/test_join_now.js')
  .pipe(testcafe({
    ...defaultExecutionConfig, selectorTimeout: 15000, browsers: ['firefox'], reporter: [{ name: 'spec' }],
  })))
