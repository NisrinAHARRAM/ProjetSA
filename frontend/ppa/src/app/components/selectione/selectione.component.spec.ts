import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectioneComponent } from './selectione.component';

describe('SelectioneComponent', () => {
  let component: SelectioneComponent;
  let fixture: ComponentFixture<SelectioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
