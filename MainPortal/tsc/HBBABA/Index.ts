import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,Router} from '@angular/router-deprecated';
import { HBBABAComponent } from './HBBABA.Component';
import { CreateComponent } from './Create.Component';

@Component({
  selector: 'HBBABA',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/HBBABA/index',  name: 'HBBABA04',  component: HBBABAComponent },
  { path: '/HBBABA/create', name: 'Create',  component: CreateComponent }
])
export class IndexComponent {
    baseUrl:string="http://52.197.71.118/";
    constructor(){
    }
}