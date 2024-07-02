import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceValueDialogComponent } from './ace-value-dialog.component';

describe('AceValueDialogComponent', () => {
  let component: AceValueDialogComponent;
  let fixture: ComponentFixture<AceValueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AceValueDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceValueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
