import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStudentProfileDisplayerComponent } from './individual-student-profile-displayer.component';

describe('IndividualStudentProfileDisplayerComponent', () => {
  let component: IndividualStudentProfileDisplayerComponent;
  let fixture: ComponentFixture<IndividualStudentProfileDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualStudentProfileDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualStudentProfileDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
