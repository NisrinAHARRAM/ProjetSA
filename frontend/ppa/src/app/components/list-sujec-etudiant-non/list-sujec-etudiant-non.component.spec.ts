import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujecEtudiantNonComponent } from './list-sujec-etudiant-non.component';

describe('ListSujecEtudiantNonComponent', () => {
  let component: ListSujecEtudiantNonComponent;
  let fixture: ComponentFixture<ListSujecEtudiantNonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSujecEtudiantNonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSujecEtudiantNonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
