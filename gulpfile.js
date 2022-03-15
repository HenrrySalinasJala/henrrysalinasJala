const gulp = require('gulp')
const testcafe = require('gulp-testcafe')
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
const path = require('path')

const filePathSettings = path.join(__dirname, '/screenshots/')
const screenshotPattern = '${DATE}_${TIME}/${BROWSER}-${BROWSER_VERSION}'
  + '/${FIXTURE}/test-${TEST}/${QUARANTINE_ATTEMPT}/${FILE_INDEX}.png'
const browserParameter = args.browser

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
  selectorTimeout: 20000,
}

function getTestBrowser() {
  const defaultBrowser = 'chrome'
  if (browserParameter !== undefined) {
    return browserParameter
  }

  return defaultBrowser
}

gulp.task('test', () => gulp.src('src/tests/business.aa.com/test_join_now.js')
  .pipe(testcafe({
    ...defaultExecutionConfig, browsers: [getTestBrowser()], reporter: [{ name: 'spec' }],
  })))
