import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { loadSettings } from './environments/loadSettings';

// bootstrapApplication(AppComponent, {
//   providers:[
//       provideRouter(routes)
//   ]
// })
// .catch(err => console.error(err));

loadSettings().then((environment: any) => {
  if (environment['production']) {
    window.console.log = () => { }

    enableProdMode();
  }

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes)
    ]
  })
    .catch(err => console.error(err));
});
