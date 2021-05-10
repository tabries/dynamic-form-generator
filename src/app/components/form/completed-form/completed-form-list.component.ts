import { Component, OnInit } from '@angular/core';
import { CompletedFormService } from "../../../services/completed-form.service";

@Component({
  selector: 'app-completed-form-list',
  templateUrl: './completed-form-list.component.html',
  styleUrls: ['./completed-form-list.component.scss'],
  providers: [CompletedFormService],
})
export class CompletedFormListComponent implements OnInit {

  constructor(public completedFormService: CompletedFormService) { }

  ngOnInit(): void {
    this.getCompletedForms()
  }

  getCompletedForms() {
    this.completedFormService.getCompletedForms().subscribe((res) => {
      this.completedFormService.completedForms = res;
    });
  }

  deleteCompletedForm(_id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.completedFormService.deleteCompletedForm(_id).subscribe((res) => {
        this.getCompletedForms();
      });
    }
  }

}
