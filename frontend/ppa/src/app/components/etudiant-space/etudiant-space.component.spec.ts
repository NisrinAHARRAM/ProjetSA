import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantSpaceComponent } from './etudiant-space.component';

describe('EtudiantSpaceComponent', () => {
  let component: EtudiantSpaceComponent;
  let fixture: ComponentFixture<EtudiantSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
