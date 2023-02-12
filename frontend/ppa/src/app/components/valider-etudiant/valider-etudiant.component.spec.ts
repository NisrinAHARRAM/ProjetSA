import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderEtudiantComponent } from './valider-etudiant.component';

describe('ValiderEtudiantComponent', () => {
  let component: ValiderEtudiantComponent;
  let fixture: ComponentFixture<ValiderEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
