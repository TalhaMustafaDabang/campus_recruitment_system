import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDisplayerComponent } from './vacancy-displayer.component';

describe('VacancyDisplayerComponent', () => {
  let component: VacancyDisplayerComponent;
  let fixture: ComponentFixture<VacancyDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
