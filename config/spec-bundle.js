Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');

// RxJS
require('rxjs');

const { TestBed } = require('@angular/core/testing');
const { platformBrowserDynamicTesting, BrowserDynamicTestingModule } = require('@angular/platform-browser-dynamic/testing');

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

var testContext = require.context('../src', true, /\.spec\.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// requires and returns all modules that match
var modules = requireAll(testContext);
