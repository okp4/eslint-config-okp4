module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    /**
     * TypeScript rules
     **/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-implicit-any-catch': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true
      }
    ],
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/switch-exhaustiveness-check': 1,
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: true,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: true
      }
    ],
    '@typescript-eslint/unified-signatures': 2,
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 2,
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 2,
    /**
     * React rules
     **/
    'react/prop-types': 0,
    'react/prefer-stateless-function': 1,
    'react/destructuring-assignment': 1,
    'react/jsx-sort-props': 2,
    'react/jsx-no-bind': 2,
    'react/no-unsafe': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-handler-names': 2
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
