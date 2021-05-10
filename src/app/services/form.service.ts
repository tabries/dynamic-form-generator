import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Form } from '../models/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  readonly URL_API = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) {}

  getForms() {
    return this.http.get<Form[]>(this.URL_API);
  }

  postForm(form: Form) {
    return this.http.post(this.URL_API, form);
  }

  putForm(form: Form) {
    return this.http.put(this.URL_API + `/${form._id}`, form);
  }

  deleteForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
