import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrendezComponent } from './ajoutrendez.component';

describe('AjoutrendezComponent', () => {
  let component: AjoutrendezComponent;
  let fixture: ComponentFixture<AjoutrendezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrendezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutrendezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
