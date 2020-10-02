module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'variants', 'layer']
      }
    ],
    'declaration-block-trailing-semicolon': 'always',
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }],
    'no-invalid-double-slash-comments': true
  }
};
