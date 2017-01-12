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

const yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  writing: function() {
    let pskPath = path.join(path.dirname(this.resolved), 'polymer-starter-kit');

    this.sourceRoot(pskPath);

    // Copy the PSK files
    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    );

    // Copy explicitly the PSK dotfiles
    this.fs.copy(
      this.templatePath('{.eslintrc.json,.gitattributes,.gitignore}'),
      this.destinationPath()
    );

    this.sourceRoot(path.join(path.dirname(this.resolved)));

    // Copy the new files
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    // Overwrite the PSK files with new files
    this.fs.copy(
      this.templatePath('{package.json,README.md}'),
      this.destinationPath()
    );
  },

  install: function() {
    this.installDependencies();
  },
});
