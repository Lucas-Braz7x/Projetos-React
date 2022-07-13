module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react",
    "prettier/flowtype"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "flowtype",
    "react",
    "prettier"
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error'
  },
};
