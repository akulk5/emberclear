'use strict';

const fs = require('fs');
const path = require('path');
const Merge = require('broccoli-merge-trees');
const mv = require('broccoli-stew').mv;
const debugTree = require('broccoli-debug').buildDebugCallback('@emberclear/ui')

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForStyles(tree) {
    let trees = tree ? [ tree ] : [];

    if (this.projectType === 'app') {
      trees.push(mv(buildStyles(this), 'app/styles'));
    }

    return debugTree(new Merge(trees), 'tree-for-styles');
  }
};

function buildStyles(context) {

}
