import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEncadrantComponent } from './update-encadrant.component';

describe('UpdateEncadrantComponent', () => {
  let component: UpdateEncadrantComponent;
  let fixture: ComponentFixture<UpdateEncadrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEncadrantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEncadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
