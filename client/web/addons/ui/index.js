'use strict';

const path = require('path');

const PostCSSImport = require('postcss-import');
const PostCSSNext = require('postcss-cssnext');

const nodeModules = path.join(__dirname, '..', '..', '..', 'node_modules');
const addonStyles = path.join(__dirname, 'addon', 'styles');

const importConfig = PostCSSImport({
  path: [nodeModules, addonStyles],
});

const cssNextConfig = PostCSSNext({
  features: {
    colorFunction: {
      preserveCustomProps: false,
    },
    customProperties: {
      preserve: true,
    },
    rem: false,
  },
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  options: {
    postcssOptions: {
      compile: {
        plugins: [importConfig, cssNextConfig],
      },
    },
  },
};
