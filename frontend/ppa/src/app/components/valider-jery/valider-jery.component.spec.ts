import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderJeryComponent } from './valider-jery.component';

describe('ValiderJeryComponent', () => {
  let component: ValiderJeryComponent;
  let fixture: ComponentFixture<ValiderJeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiderJeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiderJeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
