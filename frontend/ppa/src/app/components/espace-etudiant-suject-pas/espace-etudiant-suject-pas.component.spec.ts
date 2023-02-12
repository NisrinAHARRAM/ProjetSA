import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceEtudiantSujectPasComponent } from './espace-etudiant-suject-pas.component';

describe('EspaceEtudiantSujectPasComponent', () => {
  let component: EspaceEtudiantSujectPasComponent;
  let fixture: ComponentFixture<EspaceEtudiantSujectPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceEtudiantSujectPasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceEtudiantSujectPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
