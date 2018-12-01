import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyUserProfileComponent } from './company-user-profile.component';

describe('CompanyUserProfileComponent', () => {
  let component: CompanyUserProfileComponent;
  let fixture: ComponentFixture<CompanyUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
