import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldBase } from '../../../models/field-base';
import { FieldControlService } from '../../../services/field-control.service';
import { DynamicForm } from '../../../models/dynamic-form';
import { Form } from '../../../models/form';

import { DynamicFormService } from '../../../services/dynamic-form.service';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FieldControlService, DynamicFormService, FormService],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: DynamicForm;
  dynamicFormSections: Array<{
    section: { id: string; type: string; title: string };
    fields: FieldBase<any>[];
  }> = [];
  dynamicFormFormGroups: Array<FormGroup> = [];
  payLoad = '';
  form: Form;
  formSectionPayload: any[] = [];
  isLinear = true;

  firstName = '';
  lastName = '';

  constructor(
    private qcs: FieldControlService,
    private route: ActivatedRoute,
    public dynamicFormService: DynamicFormService,
    private formService: FormService,
    private router: Router
  ) {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    dynamicFormService.getDynamicForm(id).subscribe((res) => {
      this.dynamicForm = res;
      this.dynamicFormSections = dynamicFormService.getDynamicFormSections(res);
      this.dynamicFormSections.forEach((ele) => {
        this.dynamicFormFormGroups.push(this.qcs.toFormGroup(ele.fields));
      });
    });
  }

  ngOnInit() {}

  onSubmit(index: number) {
    this.payLoad = JSON.stringify(
      this.dynamicFormFormGroups[index].getRawValue()
    );
    if (index === 0) {
      this.firstName = this.dynamicFormFormGroups[index].get('1111')?.value;
      this.lastName = this.dynamicFormFormGroups[index].get('1113')?.value;
    }

    this.dynamicFormSections[index].fields.forEach((field: any) => {
      this.formSectionPayload[field.id] = {
        id: field.id,
        title: field.title,
        controlType: field.controlType,
        value: this.dynamicFormFormGroups[index].get(field.id)?.value,
      };
    });

    this.form = {
      _id: this.form?._id || '',
      template_id: this.dynamicForm._id,
      data: { ...this.formSectionPayload },
      created_at: new Date(),
    };
    if (this.form._id === '') {
      this.formService.postForm(this.form).subscribe((res: any) => {
        this.form._id = res._id;
      });
    } else {
      this.formService.putForm(this.form).subscribe((res: any) => {});
    }
    if (this.dynamicFormSections.length === index + 1) {
      this.router.navigate(['/completedform', this.form._id]);
    }
  }
}
