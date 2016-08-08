'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = yeoman.Base.extend({
  writing: function () {
    this.sourceRoot(path.join(path.dirname(this.resolved), 'polymer-starter-kit'));
    this.fs.copy([
      this.templatePath(),
      '!**/{sw-precache-config.js,service-worker.js}'
    ], this.destinationPath());

    this.sourceRoot(path.join(path.dirname(this.resolved)));
    this.fs.copy([
      this.templatePath('{gulpfile.js,package.json}'),
    ], this.destinationPath());
  },

  install: function () {
    this.installDependencies();
  }
});
