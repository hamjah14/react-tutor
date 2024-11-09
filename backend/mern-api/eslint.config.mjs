import globals from "globals";
import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [ 
  { files: ["src/**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  {
    files: ["tests/**/*.{js,ts,jsx,tsx,}"],
    ...jest.configs["flat/recommended"],
    rulses: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  eslintPluginPrettierRecommended,
];
