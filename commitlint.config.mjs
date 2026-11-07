// Conventional Commits with the types used in this repository (see AGENTS.md).
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['content', 'docs', 'feat', 'fix', 'refactor', 'ci', 'chore', 'revert']],
    'header-max-length': [2, 'always', 72],
    'body-max-line-length': [1, 'always', 100],
  },
};
