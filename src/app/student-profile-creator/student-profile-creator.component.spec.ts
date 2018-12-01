import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileCreatorComponent } from './student-profile-creator.component';

describe('StudentProfileCreatorComponent', () => {
  let component: StudentProfileCreatorComponent;
  let fixture: ComponentFixture<StudentProfileCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProfileCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProfileCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
