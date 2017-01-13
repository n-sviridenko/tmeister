import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { Inject, Injectable, OpaqueToken } from '@angular/core';

import { Vehicle } from 'app/model';
import { VehicleHydrator } from '../hydrator';
import { TrafficSearchMessage } from '../message';

export const TRAFFIC_MEISTER_SERVICE = new OpaqueToken('t.core.service.traffic_meister');

@Injectable()
export class TrafficService {
  // imagine that it happens on backend
  private static filterVehicle(vehicle: Vehicle, message: TrafficSearchMessage): boolean {
    return (
      (!message.types.length || message.types.indexOf(vehicle.type) !== -1) &&
      (!message.brands.length || message.brands.indexOf(vehicle.brand) !== -1) &&
      (!message.colors.length || _.intersectionBy(message.colors, vehicle.colors, 'value').length > 0)
    );
  }

  public constructor(
    @Inject(TRAFFIC_MEISTER_SERVICE) private trafficMeister: Zugmeister.TrafficMeister
  ) {}

  public getVehicles(): Observable<Vehicle[]> {
    return Observable.create((observer) => {
      this.trafficMeister.fetchData((error, data) => {
        if (error) {
          observer.error(error);
        } else {
          const vehicles: Vehicle[] = data.map(item => VehicleHydrator.hydrate(new Vehicle(), item));

          observer.next(vehicles);
          observer.complete();
        }
      });
    });
  }

  public searchVehicles(message: TrafficSearchMessage): Observable<Vehicle[]> {
    return this.getVehicles().map(
      vehicles => vehicles.filter(vehicle => TrafficService.filterVehicle(vehicle, message))
    );
  }
}
