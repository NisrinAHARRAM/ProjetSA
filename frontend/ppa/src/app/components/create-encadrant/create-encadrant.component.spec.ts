import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEncadrantComponent } from './create-encadrant.component';

describe('CreateEncadrantComponent', () => {
  let component: CreateEncadrantComponent;
  let fixture: ComponentFixture<CreateEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEncadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
