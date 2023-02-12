import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatteRendezComponent } from './updatte-rendez.component';

describe('UpdatteRendezComponent', () => {
  let component: UpdatteRendezComponent;
  let fixture: ComponentFixture<UpdatteRendezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatteRendezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatteRendezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
