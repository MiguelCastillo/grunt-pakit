/*
 * grunt-pakit
 * https://github.com/MiguelCastillo/grunt-pakit
 *
 * Copyright (c) 2016 Miguel Castillo
 * Licensed under the MIT license.
 */

var pakit = require('pakit');

module.exports = function(grunt) {
  function logError(err) {
    var errStr = err && err.stack || err;
    grunt.log.error(errStr);
    return err;
  }

  grunt.registerMultiTask('pakit', 'grunt plugin for pakit', function() {
    var settings = Object.assign({ files: [] }, this.options(), this.data);
    var files = this.files && this.files.length ? this.files : settings.files;
    var done = this.async();

    try {
      Promise
        .all(files.map(function(file) {
          return pakit({
            src: file.src,
            dest: file.dest
          }, settings);
        }))
        .then(function() {
          if (!settings.watch) {
            done();
          }
        }, logError);
    }
    catch(err) {
      logError(err);
    }
  });
};
