// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from 'eslint-plugin-import';


export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
plugins: {
  '@stylistic': stylistic,
  'import': importPlugin,
},
rules: {
  '@stylistic/indent': ['error', 2],
  '@stylistic/semi': ['error', 'always'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/space-before-function-paren': ['error', 'never'],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
},

  },
], storybook.configs["flat/recommended"]);
