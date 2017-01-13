import { DebugElement } from '@angular/core';

import { SelectItem } from 'app/shared';

export function setValueOfSelect(select: DebugElement, value: any | any[]) {
  const comp = select.componentInstance;

  const selectItem: SelectItem | SelectItem[] = Array.isArray(value)
    ? value.map(item => comp.itemTransformer(item))
    : comp.itemTransformer(value)
  ;

  comp.onData(selectItem);
}
