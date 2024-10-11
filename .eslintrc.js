module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'jest', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }
    ],
    'unused-imports/no-unused-imports-ts': 2,
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': 'off',
    'import-helpers/order-imports': [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          [
            "/^@Module/",
            "/^@Common/",
            "/^@Utils/",
            "/^@Shared/",
            "/^@Specs/",
            "/^@App/",
          ],
          [
            "parent",
            "sibling",
            "index"
          ]
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ],
  },
};
