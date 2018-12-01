import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanyAdderComponent } from './vacany-adder.component';

describe('VacanyAdderComponent', () => {
  let component: VacanyAdderComponent;
  let fixture: ComponentFixture<VacanyAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanyAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanyAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
