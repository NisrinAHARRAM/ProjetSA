import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceDemandeComponent } from './espace-demande.component';

describe('EspaceDemandeComponent', () => {
  let component: EspaceDemandeComponent;
  let fixture: ComponentFixture<EspaceDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
