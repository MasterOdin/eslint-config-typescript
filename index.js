module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project:'./tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    "@masterodin/eslint-config-javascript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/brace-style": ["error", "stroustrup"],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/semi": ["error"],
  },
};
