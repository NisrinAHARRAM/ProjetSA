import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEtuComponent } from './login-etu.component';

describe('LoginEtuComponent', () => {
  let component: LoginEtuComponent;
  let fixture: ComponentFixture<LoginEtuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEtuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEtuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
