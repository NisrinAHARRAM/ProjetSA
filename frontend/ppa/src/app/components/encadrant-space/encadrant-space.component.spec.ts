import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantSpaceComponent } from './encadrant-space.component';

describe('EncadrantSpaceComponent', () => {
  let component: EncadrantSpaceComponent;
  let fixture: ComponentFixture<EncadrantSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncadrantSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncadrantSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
