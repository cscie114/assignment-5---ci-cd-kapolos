module.exports = {
  extends: ['./node_modules/ts-standardx/.eslintrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '*.ts'],
      rules: {
        'prettier/prettier': 0
      }
    }
  ]
}
