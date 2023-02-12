import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujectComponent } from './list-suject.component';

describe('ListSujectComponent', () => {
  let component: ListSujectComponent;
  let fixture: ComponentFixture<ListSujectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSujectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSujectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
