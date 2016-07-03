"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var Index_1 = require('./Index');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(Index_1.IndexComponent, [router_1.ROUTER_PROVIDERS, { provide: common_1.APP_BASE_HREF, useValue: '/' }]);
