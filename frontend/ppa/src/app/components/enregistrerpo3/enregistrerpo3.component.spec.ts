import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enregistrerpo3Component } from './enregistrerpo3.component';

describe('Enregistrerpo3Component', () => {
  let component: Enregistrerpo3Component;
  let fixture: ComponentFixture<Enregistrerpo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enregistrerpo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enregistrerpo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
