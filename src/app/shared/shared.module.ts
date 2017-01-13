import { NgModule } from '@angular/core';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './form';
import { LoadableComponent } from './common';

const bootstrap = [
  // angular
  FormsModule,
  CommonModule,
  // vendors
  SelectModule,
];

const declarations = [
  // form
  SelectComponent,
  // common
  LoadableComponent,
];

@NgModule({
  imports: [
    ...bootstrap,
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...bootstrap,
    ...declarations,
  ],
})
export class SharedModule {}
