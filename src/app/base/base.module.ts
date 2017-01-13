import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    LayoutComponent,
    PageNotFoundComponent,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class BaseModule {}
