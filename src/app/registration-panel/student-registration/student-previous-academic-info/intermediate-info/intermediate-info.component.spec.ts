import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateInfoComponent } from './intermediate-info.component';

describe('IntermediateInfoComponent', () => {
  let component: IntermediateInfoComponent;
  let fixture: ComponentFixture<IntermediateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
