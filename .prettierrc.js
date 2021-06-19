/* eslint-disable strict, import/no-commonjs */
'use strict';

module.exports = {
  printWidth: 110,
  trailingComma: 'all',
  tabWidth: 4,
  useTabs: false,
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
