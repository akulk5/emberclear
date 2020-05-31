'use strict';

const { base, simpleTypescript: typescript, nodeOverrides } = require('@emberclear/config/eslint');

module.exports = {
  ...base,
  overrides: [
    // weird ones
    {
      files: ['*.d.ts'],
      ...typescript,
    },
    nodeOverrides,
  ],
};
