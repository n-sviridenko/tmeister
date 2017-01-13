import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'app/base';
import { TrafficSearchComponent } from 'app/traffic';

export const routes: Routes = [
  {
    path: '',
    component: TrafficSearchComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
