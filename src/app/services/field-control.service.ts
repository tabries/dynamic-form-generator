import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldBase } from '../models/field-base';

@Injectable()
export class FieldControlService {
  constructor() {}

  toFormGroup(fields: FieldBase<string>[]) {
    const group: any = {};
    let validations: any = [];

    fields.forEach((field) => {
      if (field.required) {
        validations.push(Validators.required);
      }

      group[field.id] = new FormControl(field.value || '', [...validations]);
      validations = [];
    });
    return new FormGroup(group);
  }
}
