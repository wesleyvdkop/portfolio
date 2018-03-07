import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent }
  // { path: '**',    component: NoContentComponent },
];
