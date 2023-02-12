import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRemarqComponent } from './form-remarq.component';

describe('FormRemarqComponent', () => {
  let component: FormRemarqComponent;
  let fixture: ComponentFixture<FormRemarqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRemarqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRemarqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
