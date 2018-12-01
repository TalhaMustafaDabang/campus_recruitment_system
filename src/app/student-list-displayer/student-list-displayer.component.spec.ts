import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListDisplayerComponent } from './student-list-displayer.component';

describe('StudentListDisplayerComponent', () => {
  let component: StudentListDisplayerComponent;
  let fixture: ComponentFixture<StudentListDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
