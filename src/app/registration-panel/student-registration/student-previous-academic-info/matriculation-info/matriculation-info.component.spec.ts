import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculationInfoComponent } from './matriculation-info.component';

describe('MatriculationInfoComponent', () => {
  let component: MatriculationInfoComponent;
  let fixture: ComponentFixture<MatriculationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
