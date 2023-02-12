import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCondaidatComponent } from './show-condaidat.component';

describe('ShowCondaidatComponent', () => {
  let component: ShowCondaidatComponent;
  let fixture: ComponentFixture<ShowCondaidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCondaidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCondaidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
