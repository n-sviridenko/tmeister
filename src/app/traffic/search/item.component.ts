import { Component, Input } from '@angular/core';

import { Vehicle, VehicleTypes } from 'app/model';

const css = require('./item.component.scss');

const typeIconMap = {
  [VehicleTypes.CAR]: 'car',
  [VehicleTypes.TRAIN]: 'train',
  [VehicleTypes.AIRPLANE]: 'plane',
};

@Component({
  selector: 't-traffic-search-item',
  templateUrl: './item.component.html',
})
export class TrafficSearchItemComponent {
  @Input()
  public vehicle: Vehicle;

  public css = css;

  public get typeIcon(): string {
    return typeIconMap[this.vehicle.type];
  }
}
