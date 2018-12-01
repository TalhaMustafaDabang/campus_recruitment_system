import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsForVacanciesComponent } from './applications-for-vacancies.component';

describe('ApplicationsForVacanciesComponent', () => {
  let component: ApplicationsForVacanciesComponent;
  let fixture: ComponentFixture<ApplicationsForVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsForVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsForVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
