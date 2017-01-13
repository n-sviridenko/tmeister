import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { Vehicle } from 'app/model';
import {
  TrafficService,
  AbstractLoadable,
  TrafficSearchMessage,
} from 'app/core';

@Component({
  selector: 't-traffic-search',
  templateUrl: './search.component.html',
})
export class TrafficSearchComponent extends AbstractLoadable<Vehicle[]> {
  public vehicles: Vehicle[] = [];

  public filter = new TrafficSearchMessage();

  public constructor(private trafficService: TrafficService) {
    super();
  }

  public set data(data: Vehicle[]) {
    this.vehicles = data;
  }

  protected getDataSource(): Observable<Vehicle[]> {
    return this.trafficService.searchVehicles(this.filter);
  }
}
