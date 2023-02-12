import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceSujectComponent } from './espace-suject.component';

describe('EspaceSujectComponent', () => {
  let component: EspaceSujectComponent;
  let fixture: ComponentFixture<EspaceSujectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceSujectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceSujectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
