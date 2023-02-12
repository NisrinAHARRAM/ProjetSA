import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarqComponent } from './remarq.component';

describe('RemarqComponent', () => {
  let component: RemarqComponent;
  let fixture: ComponentFixture<RemarqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemarqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
