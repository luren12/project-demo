module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@tencent/eslint-config-tencent',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'vue/require-default-prop': 'off',
    complexity: [
      'error',
      {
        max: 10,
      },
    ],
  },
};


// "eslintConfig": {
//   "root": true,
//   "env": {
//     "browser": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:vue/recommended",
//     "@tencent/eslint-config-tencent"
//   ],
//   "globals": {
//     "Aegis": "readonly",
//     "TMap": "readonly"
//   },
//   "parser": "vue-eslint-parser",
//   "parserOptions": {
//     "parser": "babel-eslint",
//     "sourceType": "module"
//   },
//   "rules": {
//     "no-underscore-dangle": "off",
//     "linebreak-style": "off",
//     "vue/require-default-prop": "off",
//     "vue/max-attributes-per-line": [
//       "error",
//       {
//         "singleline": {
//           "max": 3
//         },
//         "multiline": {
//           "max": 1,
//           "allowFirstLine": false
//         }
//       }
//     ],
//     "complexity": [
//       "error",
//       {
//         "max": 10
//       }
//     ]
//   }
// },
