'use strict';

// eslint-disable-next-line node/no-unpublished-require
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const path = require('path');

const PostCSSImport = require('postcss-import');
const PostCSSNext = require('postcss-cssnext');

const shoelacePath = path.join(__dirname, '..', '..', '..', 'node_modules', 'shoelace-css', 'source', 'css');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        extension: 'css',
        plugins: [
          PostCSSImport({
            path: [shoelacePath],
          }),
          PostCSSNext({
            features: {
              colorFunction: {
                preserveCustomProps: false,
              },
              customProperties: {
                preserve: true,
              },
              rem: false,
            },
          }),
        ],
      },
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
