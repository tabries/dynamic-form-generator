import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../../../models/field-base';

@Component({
  selector: 'app-field',
  templateUrl: './dynamic-form-field.component.html',
})
export class DynamicFormFieldComponent {
  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  mask: string = "";
  prefix=""
  ssnMask = "";
  zipMask = "00000-0000"
  currencyMask = "separator.2"

  ngOnInit() {
    if (this.field.mask){
      if (this.field.mask === "ssn"){
        this.mask = '000-00-0000'
      }
      if (this.field.mask === "zip"){
        this.mask = '00000-0000'
      }
      if (this.field.mask === "currency"){
        this.mask = this.currencyMask
        this.prefix = "$"
      }
    }
  }
  
  get isInvalid() {
    return this.field.required
      ? (this.form.controls[this.field.id].touched ||
          this.form.controls[this.field.id].dirty) &&
          !this.form.controls[this.field.id].valid
      : false;
  }

  
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
