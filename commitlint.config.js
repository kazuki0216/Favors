module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 300],
    "header-min-length": [2, always, 1],
    "subject-max-length": [2, always, 50],
    "subject-min-length": [2, always, 1],
  },
};
