# grunt-pakit

> grunt plugin for [pakit](https://github.com/MiguelCastillo/pakit)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pakit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pakit');
```

## The "pakit" task

### Overview
In your project's Gruntfile, add a section named `pakit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pakit: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.umd
Type: `String`
Default value: `undefined`

A string value that is used to create bundles that expose the main entry point as a UMD module.

#### options.watch
Type: `Boolean`
Default value: `false`

Flag to enable/disable file watching

### Usage Examples

```js
grunt.initConfig({
  pakit: {
    options: {
      umd: 'moduleName'
    },
    files: {
      'dest/index.js': ['src/index.js'],
    },
    shards: {
      'dest/vendor.js': ['/node_modules/']
    }
  },
});
```
