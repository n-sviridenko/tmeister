import * as _ from 'lodash';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';

import { setValueOfSelect } from 'app/testing';
import { Color, VehicleTypes } from 'app/model';
import { TrafficSearchMessage } from 'app/core';
import { SharedModule, SelectItem } from 'app/shared';
import { TrafficSearchFilterFormComponent } from './filter-form.component';

describe('TrafficSearchFilterFormComponent', () => {
  let fixture: ComponentFixture<TrafficSearchFilterFormComponent>;
  let comp: TrafficSearchFilterFormComponent;
  let submitSpy: jasmine.Spy;
  let typesSelect: DebugElement;
  let brandsSelect: DebugElement;
  let colorsSelect: DebugElement;
  let message: TrafficSearchMessage;

  const redColor = Color.create('red');
  const greenColor = Color.create('green');
  const blueColor = Color.create('blue');

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [SharedModule],
        declarations: [TrafficSearchFilterFormComponent],
      })
      .compileComponents()
    ;
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(TrafficSearchFilterFormComponent);
    comp = fixture.componentInstance;
    submitSpy = spyOn(comp.formSubmit, 'emit');

    message = new TrafficSearchMessage();

    comp.model = message;
    comp.types = _.values(VehicleTypes);
    comp.brands = ['Apple', 'Banana'];
    comp.colors = [redColor, greenColor, blueColor];

    fixture.detectChanges();
    tick(1000);

    typesSelect = fixture.debugElement.query(By.css('t-select[name=types]'));
    brandsSelect = fixture.debugElement.query(By.css('t-select[name=brands]'));
    colorsSelect = fixture.debugElement.query(By.css('t-select[name=colors]'));
  }));

  it('should modify message and trigger submit', fakeAsync(() => {
    const expectedTypes = [VehicleTypes.CAR];
    const expectedBrands = ['Apple'];
    const expectedColors = [redColor, greenColor];

    setValueOfSelect(typesSelect, expectedTypes);
    setValueOfSelect(brandsSelect, expectedBrands);
    setValueOfSelect(colorsSelect, expectedColors);

    fixture.detectChanges();

    // 1 on start and 1 by 1 after each modification
    expect(submitSpy.calls.count()).toBe(4);

    expect(message.types).toEqual(expectedTypes);
    expect(message.brands).toEqual(expectedBrands);
    expect(message.colors).toEqual(expectedColors);
  }));
});
