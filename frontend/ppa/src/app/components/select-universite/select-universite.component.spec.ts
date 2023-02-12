import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUniversiteComponent } from './select-universite.component';

describe('SelectUniversiteComponent', () => {
  let component: SelectUniversiteComponent;
  let fixture: ComponentFixture<SelectUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
