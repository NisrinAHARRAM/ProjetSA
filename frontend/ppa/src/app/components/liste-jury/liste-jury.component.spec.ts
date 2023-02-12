import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJuryComponent } from './liste-jury.component';

describe('ListeJuryComponent', () => {
  let component: ListeJuryComponent;
  let fixture: ComponentFixture<ListeJuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeJuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
