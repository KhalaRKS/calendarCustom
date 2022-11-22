module.exports = {
  root: true,
  extends: '@react-native-community',
  'eol-last': 0,
  'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0}],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
