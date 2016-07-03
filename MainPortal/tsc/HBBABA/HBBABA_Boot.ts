/// <reference path="../tslib/jquery.d.ts" />
/// <reference path="../tslib/jqgrid.d.ts" />
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { IndexComponent } from './Index';
import { ROUTER_PROVIDERS } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

bootstrap(IndexComponent, [ROUTER_PROVIDERS,{provide: APP_BASE_HREF, useValue: '/'}]);