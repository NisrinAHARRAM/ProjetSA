import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujectEnragistrerComponent } from './list-suject-enragistrer.component';

describe('ListSujectEnragistrerComponent', () => {
  let component: ListSujectEnragistrerComponent;
  let fixture: ComponentFixture<ListSujectEnragistrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSujectEnragistrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSujectEnragistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
