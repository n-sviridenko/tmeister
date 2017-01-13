import { Vehicle, Color } from 'app/model';
import { ColorHydrator } from './color.hydrator';

export class VehicleHydrator {
  public static hydrate(object: Vehicle, data: any): Vehicle {
    object.id = data.id;
    object.type = data.type;
    object.brand = data.brand;
    object.colors = data.colors.map(item => ColorHydrator.hydrate(new Color(), item));
    object.imageUrl = data.img;

    return object;
  }
}
