import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enregistrerpo2Component } from './enregistrerpo2.component';

describe('Enregistrerpo2Component', () => {
  let component: Enregistrerpo2Component;
  let fixture: ComponentFixture<Enregistrerpo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enregistrerpo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enregistrerpo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
