module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "prettier",
    "prettier/react",
  ],
  plugins: ["react", "import", "emotion"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    "no-console": 1,
    "no-unused-vars": ["warn", { args: "all" }],
    "react/display-name": [0],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
  },
}
