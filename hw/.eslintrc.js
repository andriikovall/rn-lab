module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'rules': {
    'no-var': 'error',
    'semi': ['error', 'always'],
    'indent': 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    'no-extra-semi': 0,
    'prettier/prettier': 0,
    'indent': ['error', 2],
    'no-use-before-define': 0,
    'indent': ['error', 2, { 'SwitchCase': 1 }]
  }
};
