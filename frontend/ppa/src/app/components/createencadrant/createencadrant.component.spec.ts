import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateencadrantComponent } from './createencadrant.component';

describe('CreateencadrantComponent', () => {
  let component: CreateencadrantComponent;
  let fixture: ComponentFixture<CreateencadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateencadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateencadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
