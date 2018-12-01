import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUniversityInfoComponent } from './student-university-info.component';

describe('StudentUniversityInfoComponent', () => {
  let component: StudentUniversityInfoComponent;
  let fixture: ComponentFixture<StudentUniversityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUniversityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUniversityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
