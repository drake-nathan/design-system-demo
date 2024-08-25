/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:perfectionist/recommended-natural-legacy",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "perfectionist", "tailwindcss", "storybook"],
  reportUnusedDisableDirectives: true,
  rules: {
    "@typescript-eslint/consistent-type-exports": [
      "error",
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      { allowNumber: true },
    ],
    "no-console": ["warn", { allow: ["info", "warn", "error"] }],
    "perfectionist/sort-imports": ["error", { internalPattern: ["@/**"] }],
  },
  settings: {
    tailwindcss: {
      callees: ["clsx", "cn", "cva"],
    },
  },
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = config;
