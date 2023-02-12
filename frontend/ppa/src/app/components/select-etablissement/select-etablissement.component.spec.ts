import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEtablissementComponent } from './select-etablissement.component';

describe('SelectEtablissementComponent', () => {
  let component: SelectEtablissementComponent;
  let fixture: ComponentFixture<SelectEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
