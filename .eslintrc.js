module.exports = {
  globals: {
    $: true,
    fixture: true,
    test: true,
    ENV: true,
    process: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'lean-imports',
    'promise',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // support for Dynamic Imports and BigInt
    sourceType: 'module',
  },
  rules: {
    'comma-spacing': 1,
    indent: [2, 2],
    'lean-imports/import': [1, [
      'lodash',
    ]],
    'max-len': [1, 120, 4],
    'max-statements': [1, 20],
    'max-depth': 1,
    'no-case-declarations': 0,
    'no-cond-assign': 1,
    'no-extra-semi': 2,
    'no-trailing-spaces': 1,
    'no-unused-vars': 1,
    'no-useless-constructor': 2,
    'object-curly-spacing': ['error', 'always'],
    'constructor-super': 2,
    camelcase: ['warn', { properties: 'never' }],
    'no-return-assign': ['warn', 'except-parens'],
    'no-useless-escape': 'warn',
    'no-new': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'no-unsafe-finally': 'warn',
    'promise/param-names': 'warn',
    'no-control-regex': 'warn',
    'handle-callback-err': 'warn',
    quotes: 'warn',
    semi: ['error', 'never'],
  },
};
