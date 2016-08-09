import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders } from './app/app.routes';
import {provide} from '@angular/core';
import { GlobalsComponent } from './app/shared/globals-component/globals.component'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  appRouterProviders,
  GlobalsComponent,
  provide(Window, {useValue: window})
]);
