'use strict';

const config = require('@masterodin/eslint-config-javascript');

const rules = {};
[
  'brace-style',
  'comma-spacing',
  'default-param-last',
  'indent',
  'keyword-spacing',
  'lines-between-class-members',
  'no-dupe-class-members',
  'no-extra-semi',
  'no-unused-vars',
  'quotes',
  'semi',
].forEach((rule) => {
  rules[`@typescript-eslint/${rule}`] = config.rules[rule] || 'error';
  rules[rule] = 'off';
});

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project:'./tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    '@masterodin/eslint-config-javascript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: Object.assign(
    {
      '@typescript-eslint/array-type': ['error', {default: 'array'}],
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/consistent-type-assertions': ['error', {assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter'}],
    },
    rules,
  ),
};
