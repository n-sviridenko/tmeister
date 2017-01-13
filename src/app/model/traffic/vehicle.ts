import { Color } from './color';

export const VehicleTypes = {
  CAR: 'car',
  TRAIN: 'train',
  AIRPLANE: 'airplane',
};

export class Vehicle {
  public id: number;

  public type: string;

  public brand: string;

  public colors: Color[] = [];

  public imageUrl: string;
}
