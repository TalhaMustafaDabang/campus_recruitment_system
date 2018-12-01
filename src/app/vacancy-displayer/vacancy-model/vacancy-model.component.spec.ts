import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyModelComponent } from './vacancy-model.component';

describe('VacancyModelComponent', () => {
  let component: VacancyModelComponent;
  let fixture: ComponentFixture<VacancyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
