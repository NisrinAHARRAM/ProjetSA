import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkDriveComponent } from './link-drive.component';

describe('LinkDriveComponent', () => {
  let component: LinkDriveComponent;
  let fixture: ComponentFixture<LinkDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
