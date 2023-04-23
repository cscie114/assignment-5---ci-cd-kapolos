module.exports = {
  extends: ['./node_modules/ts-standardx/.eslintrc.js'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '*.ts'],
      rules: {
        'prettier/prettier': 0
      }
    }
  ]
}
