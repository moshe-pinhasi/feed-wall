import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app/app.component';

import * as services from './app/services';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [...mapValuesToArray(services)];

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

bootstrap(AppComponent, [
    // These are dependencies of our App
    ...HTTP_PROVIDERS,
    ...providers,
    provideForms()
  ])
  .catch(err => console.error(err));
