import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPanelComponent } from './signin-panel.component';

describe('SigninPanelComponent', () => {
  let component: SigninPanelComponent;
  let fixture: ComponentFixture<SigninPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
