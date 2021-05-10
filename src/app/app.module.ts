import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DynamicFormComponent } from './components/form/dynamic-form/dynamic-form.component';
import { TemplateComponent } from './components/template/template.component';
import { DynamicFormFieldComponent } from './components/form/dynamic-form/dynamic-form-field.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DynamicFormListComponent } from './components/form/dynamic-form/dynamic-form-list.component';
import { CompletedFormListComponent } from './components/form/completed-form/completed-form-list.component';
import { CompletedFormComponent } from './components/form/completed-form/completed-form.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,
    TemplateComponent,
    NavbarComponent,
    DynamicFormListComponent,
    CompletedFormListComponent,
    CompletedFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'dynamicform/:id', component: DynamicFormComponent },
      { path: 'dynamicform/delete/:id', component: DynamicFormComponent },
      { path: 'dynamicformlist', component: DynamicFormListComponent },
      { path: 'completedform/:id', component: CompletedFormComponent },
      { path: 'completedform/delete/:id', component: CompletedFormComponent },
      { path: 'completedformlist', component: CompletedFormListComponent },
      { path: 'template', component: TemplateComponent },
      { path: '', redirectTo: 'dynamicformlist', pathMatch: 'full' },
      { path: '**', redirectTo: 'dynamicformlist', pathMatch: 'full' },
    ]),
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
