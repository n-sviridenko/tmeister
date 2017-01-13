import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async, fakeAsync } from '@angular/core/testing';

import { SharedModule } from 'app/shared';
import { Color, Vehicle, VehicleTypes } from 'app/model';
import { TrafficSearchItemComponent } from './item.component';

describe('TrafficSearchItemComponent', () => {
  let fixture: ComponentFixture<TrafficSearchItemComponent>;
  let comp: TrafficSearchItemComponent;
  let header: DebugElement;
  let block: DebugElement;
  let icon: DebugElement;
  let colors: DebugElement[];

  const vehicle = new Vehicle();
  vehicle.id = 2;
  vehicle.type = VehicleTypes.AIRPLANE;
  vehicle.colors = [Color.create('red'), Color.create('blue')];
  vehicle.brand = 'Canadair North Star';
  vehicle.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg';

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [SharedModule],
        declarations: [TrafficSearchItemComponent],
      })
      .compileComponents()
    ;
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(TrafficSearchItemComponent);
    comp = fixture.componentInstance;

    comp.vehicle = vehicle;

    fixture.detectChanges();

    header = fixture.debugElement.query(By.css('.card-header'));
    block = fixture.debugElement.query(By.css('.card-block'));
    icon = block.query(By.css('.fa'));
    colors = fixture.debugElement.queryAll(By.css('.card-footer .badge'));
  }));

  it('should display item', () => {
    const expectedBrand = 'Canadair North Star';
    const expectedImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg';
    const expectedColorNames = ['• red', '• blue'];
    const colorNames = colors.map(item => item.nativeElement.innerText.trim());

    expect(header.nativeElement.style.backgroundImage).toBe(`url("${expectedImageUrl}")`);
    expect(block.nativeElement.innerText.trim()).toBe(expectedBrand);
    expect(icon.nativeElement.className).toContain('fa-plane');
    expect(colorNames).toEqual(expectedColorNames);
  });
});
