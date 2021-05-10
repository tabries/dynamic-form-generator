import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TextField } from '../models/field-textField';
import { FieldBase } from '../models/field-base';
import { DynamicForm } from '../models/dynamic-form';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  dynamicForms: DynamicForm[];
  readonly URL_API = 'http://localhost:3000/templates';

  constructor(private http: HttpClient) {}

  getDynamicForms() {
    return this.http.get<DynamicForm[]>(this.URL_API + '/list');
  }

  getDynamicForm(id: string) {
    return this.http.get<DynamicForm>(this.URL_API + '/' + id);
  }

  getDynamicFormSections(template: any) {
    let formSections: Array<{
      section: { id: string; type: string; title: string };
      fields: FieldBase<any>[];
    }> = [];

    let formTemplate: any = template.data;
    formTemplate.children.forEach((tree: any) => {
      tree.children[0].children.forEach((section: any) => {
        let sectionFields: FieldBase<any>[] = [];
        section.children.forEach((templateField: any) => {
          sectionFields.push(new TextField(templateField));
        });
        formSections.push({
          section: {
            id: section.id,
            type: section.type,
            title: section.title,
          },
          fields: sectionFields,
        });
      });
    });

    return formSections;
  }

  deleteDynamicForm(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
