module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',

    // Must be the last item
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['unused-imports', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'comma-dangle': 'off',
    semi: 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
