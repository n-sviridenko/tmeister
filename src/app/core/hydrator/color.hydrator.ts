import { Color } from 'app/model';

export class ColorHydrator {
  public static hydrate(object: Color, data: any): Color {
    object.name = data;
    object.value = data;

    return object;
  }
}
