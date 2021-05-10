import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from "../../../services/dynamic-form.service";

@Component({
  selector: 'app-dynamic-form-list',
  templateUrl: './dynamic-form-list.component.html',
  styleUrls: ['./dynamic-form-list.component.scss'],
  providers: [DynamicFormService],
})
export class DynamicFormListComponent implements OnInit {

  constructor(public dynamicFormService: DynamicFormService) { }

  ngOnInit(): void {
    this.getDynamicForms()
  }

  getDynamicForms() {
    this.dynamicFormService.getDynamicForms().subscribe((res) => {
      this.dynamicFormService.dynamicForms = res;
    });
  }

  deleteDynamicForm(_id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.dynamicFormService.deleteDynamicForm(_id).subscribe((res) => {
        this.getDynamicForms();
      });
    }
  }

}
