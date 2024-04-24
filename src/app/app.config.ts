import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HeroesComponent } from './heroes/heroes.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
