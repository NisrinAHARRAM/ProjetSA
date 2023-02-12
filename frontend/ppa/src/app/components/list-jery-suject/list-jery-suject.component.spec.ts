import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJerySujectComponent } from './list-jery-suject.component';

describe('ListJerySujectComponent', () => {
  let component: ListJerySujectComponent;
  let fixture: ComponentFixture<ListJerySujectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJerySujectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJerySujectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
