module.exports = {
  extends: ["eslint:recommended", "prettier", "prettier/react"],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2016,
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
}
