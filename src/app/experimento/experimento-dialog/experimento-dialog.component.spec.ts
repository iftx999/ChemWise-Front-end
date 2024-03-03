import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperimentoDialogComponent } from './experimento-dialog.component';

describe('ExperimentoDialogComponent', () => {
  let component: ExperimentoDialogComponent;
  let fixture: ComponentFixture<ExperimentoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
