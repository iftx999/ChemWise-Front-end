import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaProjetoDialogComponent } from './pesquisaProjeto-dialog.component';

describe('PesquisaProjetoDialogComponent', () => {
  let component: PesquisaProjetoDialogComponent;
  let fixture: ComponentFixture<PesquisaProjetoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaProjetoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaProjetoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
