import * as _ from 'lodash';
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const controlValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

export interface SelectItem {
  id: string;
  text: string;
}

export type SelectItemTransformer = (item: any) => SelectItem;

/**
 * This class allows to use ng2-select as form control
 */

@Component({
  selector: 't-select',
  templateUrl: './select.component.html',
  providers: [controlValueAccessor],
})
export class SelectComponent implements ControlValueAccessor {
  @Input()
  public items: any[];

  @Input()
  public itemTransformer: SelectItemTransformer;

  @Input()
  public multiple: boolean = false;

  @Input()
  public placeholder: string;

  public value: any | any[];

  public get selectItems(): SelectItem[] {
    return this.items.map(item => this.itemTransformer(item));
  }

  public get activeSelectItems(): SelectItem[] {
    let selectedItems;

    if (_.isNil(this.value)) {
      selectedItems = [];
    } else {
      selectedItems = this.multiple ? this.value : [this.value];
    }

    return selectedItems.map(item => this.itemTransformer(item));
  }

  public onData(data: SelectItem | SelectItem[]) {
    const dataItems = <SelectItem[]> (this.multiple ? data : [data]);
    const selectedItems = this.items.filter(item => this.isItemSelected(item, dataItems));

    if (this.multiple) {
      this.value = selectedItems;
    } else {
      this.value = selectedItems.length ? selectedItems[0] : null;
    }

    this.onChangeCallback(this.value);
  }

  public writeValue(value: any | any[]) {
    if (value) {
      this.value = value;
    }
  }

  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  private isItemSelected(item: any, selectedItems: SelectItem[]): boolean {
    const selectItem = this.itemTransformer(item);

    return selectedItems
      .filter(dataItem => dataItem.id === selectItem.id)
      .length > 0
    ;
  }

  private onTouchedCallback: () => void = () => undefined;

  private onChangeCallback: (_: any) => void = () => undefined;
}
