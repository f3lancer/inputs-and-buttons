// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  [
    globalIgnores(["dist"]),
    {
      files: ["**/*.{ts,tsx,js}"],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs["recommended-latest"],
        reactRefresh.configs.vite,
        stylistic.configs.customize({
          indent: 2,
          semi: true,
          quotes: "double",
          jsx: true,
        }),
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        "@stylistic": stylistic,
        "import": importPlugin,
      },
      rules: {
        "arrow-parens": "off",
        "import/order": [
          "error",
          {
            "groups": [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "newlines-between": "always",
            "alphabetize": {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
  storybook.configs["flat/recommended"],
);
