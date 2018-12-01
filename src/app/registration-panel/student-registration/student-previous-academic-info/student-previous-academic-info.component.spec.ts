import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPreviousAcademicInfoComponent } from './student-previous-academic-info.component';

describe('StudentPreviousAcademicInfoComponent', () => {
  let component: StudentPreviousAcademicInfoComponent;
  let fixture: ComponentFixture<StudentPreviousAcademicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPreviousAcademicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPreviousAcademicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
