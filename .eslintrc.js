module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    allowSingleLineBlocks: 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-multiple-empty-lines': 0,
    'no-shadow': 0,
    'no-alert': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    'default-param-last': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-spacing': 0,
    'react/jsx-filename-extension': 0,
    'object-curly-spacing': 0,
    'no-dupe-keys': 0,
    'react/jsx-closing-tag-location': 0,
    'no-undef': 0,
  },
}
