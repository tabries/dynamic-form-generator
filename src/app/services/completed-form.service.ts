import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TextField } from '../models/field-textField';
import { FieldBase } from '../models/field-base';
import { Form } from '../models/form';
import { DynamicForm } from '../models/dynamic-form';

@Injectable({
  providedIn: 'root',
})
export class CompletedFormService {
  completedForms: Form[];
  readonly URL_API = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) {}

  getCompletedForms() {
    return this.http.get<Form[]>(this.URL_API + '/list');
  }

  getCompletedForm(id: string) {
    return this.http.get<{ completedForm: Form; dynamicForm: DynamicForm }>(
      this.URL_API + '/' + id
    );
  }

  deleteCompletedForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
