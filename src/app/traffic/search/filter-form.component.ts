import { Subscription } from 'rxjs';
import { NgForm, FormGroup } from '@angular/forms';
import {
  Input,
  Output,
  Component,
  OnDestroy,
  ViewChild,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

import { Color } from 'app/model';
import { TrafficSearchMessage } from 'app/core';
import { SelectItemTransformer } from 'app/shared';

@Component({
  selector: 't-traffic-search-filter-form',
  templateUrl: './filter-form.component.html',
})
export class TrafficSearchFilterFormComponent implements AfterViewInit, OnDestroy {
  @Input()
  public model: TrafficSearchMessage;

  @Input()
  public types: string[];

  @Input()
  public brands: string[];

  @Input()
  public colors: Color[];

  @Output()
  public formSubmit = new EventEmitter();

  public form: FormGroup;

  private valueChangesListener: Subscription;

  private lastModelState: string;

  public typeTransformer: SelectItemTransformer = (type: string) => ({ id: type, text: type });

  public brandTransformer: SelectItemTransformer = (brand: string) => ({ id: brand, text: brand });

  public colorTransformer: SelectItemTransformer = (color: Color) => ({ id: color.value, text: color.name });

  @ViewChild('form')
  public set ngForm(ngForm: NgForm) {
    this.form = ngForm.form;
  }

  public ngAfterViewInit() {
    this.valueChangesListener = this.form.valueChanges.subscribe(this.onValueChanges.bind(this));
  }

  public ngOnDestroy() {
    this.valueChangesListener.unsubscribe();
  }

  public onValueChanges(a) {
    if (this.isModelChanged()) {
      this.formSubmit.emit();
    }
  }

  // we need it because valueChanges fires each time for each control first time
  private isModelChanged(): boolean {
    const modelState = JSON.stringify(this.model);

    if (this.lastModelState === modelState) {
      return false;
    }

    this.lastModelState = modelState;

    return true;
  }
}
