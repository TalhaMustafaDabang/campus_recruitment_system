import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUserProfileComponent } from './student-user-profile.component';

describe('StudentUserProfileComponent', () => {
  let component: StudentUserProfileComponent;
  let fixture: ComponentFixture<StudentUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
