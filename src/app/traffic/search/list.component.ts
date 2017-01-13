import * as _ from 'lodash';
import { Component, Input } from '@angular/core';

import { Vehicle } from 'app/model';

@Component({
  selector: 't-traffic-search-list',
  templateUrl: './list.component.html',
})
export class TrafficSearchListComponent {
  @Input()
  public vehicles: Vehicle[];

  public columnCount: number = 3;

  public get vehicleGroups(): Vehicle[][] {
    return _.chunk(this.vehicles, this.columnCount);
  }
}
