/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

'use strict';

const path = require('path');

const chalk = require('chalk');
const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  writing: function() {
    this.sourceRoot(path.join(path.dirname(this.resolved), 'polymer-starter-kit'));
    this.fs.copy([
      this.templatePath(),
      '!**/{sw-precache-config.js}'
    ], this.destinationPath());

    this.sourceRoot(path.join(path.dirname(this.resolved)));
    this.fs.copy([
      this.templatePath('gulp-tasks/**/*'),
      this.templatePath('{gulpfile.js,package.json}'),
    ], this.destinationPath());
  },

  install: function() {
    this.installDependencies();
  }
});
