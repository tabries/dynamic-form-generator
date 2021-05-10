import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompletedFormService } from '../../../services/completed-form.service';
import { Form } from '../../../models/form';
import { DynamicForm } from '../../../models/dynamic-form';

@Component({
  selector: 'app-completed-form',
  templateUrl: './completed-form.component.html',
  styleUrls: ['./completed-form.component.scss'],
  providers: [CompletedFormService],
})
export class CompletedFormComponent implements OnInit {
  completedForm: {completedForm: Form, dynamicForm: DynamicForm};
  fields: any[]=[];

  constructor(
    private route: ActivatedRoute,
    public completedFormService: CompletedFormService
  ) {
    const id: string = String(this.route.snapshot.paramMap.get('id'));
    completedFormService.getCompletedForm(id).subscribe((res) => {
      this.completedForm = {completedForm: res.completedForm,dynamicForm: res.dynamicForm};
      Object.entries(this.completedForm.completedForm.data).forEach((field: any)=>{
        this.fields.push(field[1])
      })
    });
  }

  ngOnInit(): void {}
}
