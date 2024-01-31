import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipametoDialogComponent } from './equipameto-dialog.component';

describe('EquipametoDialogComponent', () => {
  let component: EquipametoDialogComponent;
  let fixture: ComponentFixture<EquipametoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipametoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipametoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
