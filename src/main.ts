import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';
import AOS from 'aos'
import { addBackToTop } from 'vanilla-back-to-top'


if (environment.production) {
  enableProdMode();
}

AOS.init()
addBackToTop({
  backgroundColor: '#282b2e',
  textColor: '#FFF'
})
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
