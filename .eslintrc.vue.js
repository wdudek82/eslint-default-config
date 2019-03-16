module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],

  rules: {
    /* Best Practices */
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
      },
    ],

    /* ECMAScript 6 */
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'always'],
    'function-paren-newline': ['error', 'consistent'],
    'no-confusing-arrow': 0,

    /* Stylistic */
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'space-before-function-paren': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-underscore-dangle': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': ['error', { consistent: true }],

    /* Vue */
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
