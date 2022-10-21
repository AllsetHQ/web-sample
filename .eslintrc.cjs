module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module',
    'project': './tsconfig.json',
    'ecmaFeatures': {
      'jsx': true
    },
  },
  'plugins': [
    '@typescript-eslint',
    'unicorn',
    'import',
    'react',
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': 'off',
    'require-jsdoc': 'off',
    'import/no-unresolved': 'off',
    'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always' }],
    'max-len': ['error', { 'code': 140, 'tabWidth': 4 }],
    'object-curly-spacing': ['error', 'always'],
    'react/prop-types': 0,
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    // ensure promises are awaited in try/catch statements (errors can slip through without this)
    // note you must disable the base rule as it can report incorrect errors
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
    'no-trailing-spaces': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'unicorn/filename-case': [
      'error',
      {
        'case': 'kebabCase'
      }
    ],
    'object-shorthand': ['error', 'properties']
  }
}
