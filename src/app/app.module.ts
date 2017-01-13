import * as TrafficMeister from 'zugmeister';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseModule } from 'app/base';
import { routing } from './app.routing';
import { SharedModule } from 'app/shared';
import { TrafficModule } from 'app/traffic';
import { AppComponent } from './app.component';
import { TrafficService, TRAFFIC_MEISTER_SERVICE } from 'app/core';

@NgModule({
  imports: [
    // vendors
    BrowserModule,
    // app
    routing,
    BaseModule,
    SharedModule,
    TrafficModule,
  ],
  providers: [
    TrafficService,
    { provide: TRAFFIC_MEISTER_SERVICE, useValue: TrafficMeister },
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
