module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }]
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2016'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  ignorePatterns: ['node_modules', 'build']
}
