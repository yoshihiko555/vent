// module.exports = {
//   "env": {
//     "browser": true,
//     "es2021": true,
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:vue/vue3-essential",
//     "plugin:@typescript-eslint/recommended"
//   ],
//   "parserOptions": {
//     "ecmaVersion": 13,
//     "parser": "@typescript-eslint/parser",
//     "project": "tsconfig.json",
//     'extraFileExtensions': [
//       '.vue',
//     ],
//   },
//   "plugins": [
//     "vue",
//     "@typescript-eslint",
//   ],
//   "rules": {

//   }
// };


module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 13
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {}
}
