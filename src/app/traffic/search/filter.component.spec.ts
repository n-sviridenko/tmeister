import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { SharedModule } from 'app/shared';
import { TrafficSearchMessage } from 'app/core';
import { Color, Vehicle, VehicleTypes } from 'app/model';
import { TrafficSearchFilterComponent } from './filter.component';
import { TrafficSearchFilterFormComponent } from './filter-form.component';

describe('TrafficSearchFilterComponent', () => {
  let fixture: ComponentFixture<TrafficSearchFilterComponent>;
  let comp: TrafficSearchFilterComponent;
  let selectionsSelect: DebugElement[];
  let message: TrafficSearchMessage;

  const car = new Vehicle();
  car.id = 1;
  car.type = VehicleTypes.CAR;
  car.colors = [Color.create('red')];
  car.brand = 'Bugatti Veyron';
  car.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg';

  const plain = new Vehicle();
  plain.id = 2;
  plain.type = VehicleTypes.AIRPLANE;
  plain.colors = [Color.create('red'), Color.create('blue')];
  plain.brand = 'Canadair North Star';
  plain.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg';

  const train = new Vehicle();
  train.id = 3;
  train.type = VehicleTypes.TRAIN;
  train.colors = [Color.create('green'), Color.create('blue')];
  train.brand = 'Prairie 2-6-2';
  train.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/CFR_Steam_locomotive.jpg/600px-CFR_Steam_locomotive.jpg';

  const secondTrain = new Vehicle();
  secondTrain.id = 4;
  secondTrain.type = VehicleTypes.TRAIN;
  secondTrain.colors = [Color.create('black')];
  secondTrain.brand = 'Amer 4-4-0';
  secondTrain.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/440woodcut.jpg/600px-440woodcut.jpg';

  const vehicles = [car, plain, train, secondTrain];

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [SharedModule],
        declarations: [
          TrafficSearchFilterComponent,
          TrafficSearchFilterFormComponent,
        ],
      })
      .compileComponents()
    ;
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(TrafficSearchFilterComponent);
    comp = fixture.componentInstance;

    message = new TrafficSearchMessage();

    comp.filter = message;
    comp.vehicles = vehicles;

    fixture.detectChanges();
    tick(1000);
  }));

  it('should build lists', () => {
    const expectedTypes = [VehicleTypes.CAR, VehicleTypes.AIRPLANE, VehicleTypes.TRAIN];
    const expectedBrands = [car.brand, plain.brand, train.brand, secondTrain.brand];
    const expectedColors = ['red', 'blue', 'green', 'black'].map(data => Color.create(data));

    expect(comp.types).toEqual(expectedTypes);
    expect(comp.brands).toEqual(expectedBrands);
    expect(comp.colors).toEqual(expectedColors);
  });

  it('should not see filter selections', () => {
    selectionsSelect = fixture.debugElement.queryAll(By.css('.badge'));

    expect(selectionsSelect.length).toBe(0);
  });

  it('should display selected filter parameters', fakeAsync(() => {
    message.types = [VehicleTypes.CAR];
    message.brands = [car.brand];
    message.colors = ['red', 'green'].map(data => Color.create(data));

    fixture.detectChanges();

    selectionsSelect = fixture.debugElement.queryAll(By.css('.badge'));

    const expectedSelections = ['car', 'Bugatti Veyron', '• red', '• green'];
    const selections = selectionsSelect.map(item => item.nativeElement.innerText.trim());

    expect(selections).toEqual(expectedSelections);
  }));
});
