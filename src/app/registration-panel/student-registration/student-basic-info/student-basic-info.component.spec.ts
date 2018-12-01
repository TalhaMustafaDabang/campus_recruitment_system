import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBasicInfoComponent } from './student-basic-info.component';

describe('StudentBasicInfoComponent', () => {
  let component: StudentBasicInfoComponent;
  let fixture: ComponentFixture<StudentBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
