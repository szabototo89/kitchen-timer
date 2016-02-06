var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.test.config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha'],
    files: [].concat(
      './spec/**/*.spec.ts'
    ),

    preprocessors: {
      'spec/**/*.spec.ts': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'progress', 'html' ],

    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default


      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: false // reports start folded (only with preserveDescribeNesting)
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    }
  });
};