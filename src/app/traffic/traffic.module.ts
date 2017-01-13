import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import {
  TrafficSearchComponent,
  TrafficSearchItemComponent,
  TrafficSearchListComponent,
  TrafficSearchFilterComponent,
  TrafficSearchFilterFormComponent,
} from './search';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TrafficSearchComponent,
    TrafficSearchItemComponent,
    TrafficSearchListComponent,
    TrafficSearchFilterComponent,
    TrafficSearchFilterFormComponent,
  ],
})
export class TrafficModule {}
