import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { ConfigService, ApiService, PostsService } from './services';

import '../style/app.scss';
import '../style/btns.scss';

/*
 * App Component
 * Top Level Component
 */

// encapsulation: ViewEncapsulation.None,
@Component({
  selector: 'my-app',
  directives: [...ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor() {

  }
}
