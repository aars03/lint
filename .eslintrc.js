module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Target ECMAScript 2020 (ES11)
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    // Add your custom rules here
  },
};

