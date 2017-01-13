require('ts-node/register');
var helpers = require('./helpers');

const config = {
  baseUrl: 'http://localhost:3000/',

  specs: [
    helpers.root('src/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },

  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  useAllAngular2AppRoots: true
};

exports.config = config;
