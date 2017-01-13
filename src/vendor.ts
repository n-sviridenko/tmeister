import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

import 'rxjs';
import 'lodash';

// use it like a third-party module
import 'zugmeister';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

// it wasn't included in the package, so let's add it manually
import 'app/style/vendor/ng2-select/style.scss';

if ('prod' === ENV) {
  // Production
} else {
  // Development
  require('angular2-hmr');
}
