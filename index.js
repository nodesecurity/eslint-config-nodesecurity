module.exports = {
  extends: ['nodesecurity/es5'],
  env: {
    es6: true
  },
  rules: {
    'no-var': 2,
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, { before: true, after: true }],
    'hapi/no-arrowception': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-template': 2,
    'no-const-assign': 2,
    'constructor-super': 2,
    'no-this-before-super': 2
  }
};
