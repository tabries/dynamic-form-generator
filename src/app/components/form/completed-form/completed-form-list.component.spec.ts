import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedFormListComponent } from './completed-form-list.component';

describe('CompletedFormListComponent', () => {
  let component: CompletedFormListComponent;
  let fixture: ComponentFixture<CompletedFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
