module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      rules: {
        'import/prefer-default-export': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'indent': ['error', 2],
    'no-unused-vars': 'warn',
    // 'node/no-unsupported-features/es-syntax': ['error', { 'ignores': ['modules'] }],


  },
};
