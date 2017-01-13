import * as _ from 'lodash';
import {
  Input,
  Output,
  Component,
  EventEmitter,
} from '@angular/core';

import { Vehicle, Color } from 'app/model';
import { TrafficSearchMessage } from 'app/core';

@Component({
  selector: 't-traffic-search-filter',
  templateUrl: './filter.component.html',
})
export class TrafficSearchFilterComponent {
  @Input()
  public filter: TrafficSearchMessage;

  @Output()
  public filterUpdate = new EventEmitter();

  public types: string[];

  public brands: string[];

  public colors: Color[];

  @Input()
  public set vehicles(vehicles: Vehicle[]) {
    this.types = _.uniq(vehicles.map(vehicle => vehicle.type));
    this.brands = _.uniq(vehicles.map(vehicle => vehicle.brand));

    this.colors = <Color[]> _.chain(vehicles)
      .map(vehicle => vehicle.colors)
      .flatten()
      .uniqBy('name')
      .value()
    ;
  }

  public isFilterNotEmpty(): boolean {
    return (
      this.filter.types.length > 0 ||
      this.filter.brands.length > 0 ||
      this.filter.colors.length > 0
    );
  }

  public onFormSubmit() {
    this.filterUpdate.next();
  }
}
