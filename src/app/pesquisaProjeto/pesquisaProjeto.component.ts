import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PesquisaProjeto } from 'app/model/pesquisaProjeto';
import { PesquisaProjetoService } from 'app/service/pesquisaProjeto.service';
import { PesquisaProjetoDialogComponent } from './pesquisaProjeto-dialog/pesquisaProjeto-dialog.component';

@Component({
  selector: 'app-pesquisaProjeto',
  templateUrl: './pesquisaProjeto.component.html',
  styleUrls: ['./pesquisaProjeto.component.css']
})
export class TypographyComponent implements OnInit {

  pesquisaProjetolist: PesquisaProjeto[];
  pesquisaProjetoDataSource: MatTableDataSource<PesquisaProjeto>;
  pesquisaProjetoColuns: string[] = ['titulo', 'nomeProjeto', 'descricao', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private pesquisaProjetoService: PesquisaProjetoService

  ) { }

  ngOnInit() {
  }

  listarPesquisaProjetos(): void {
    this.pesquisaProjetoService.getPesquisaProjetos().subscribe(data => {
      console.log(data);
      this.pesquisaProjetolist = data;
      this.pesquisaProjetoDataSource = new MatTableDataSource(this.pesquisaProjetolist);
    });
  }

  salvarOuAtualizarPesquisaProjeto(pesquisaProjeto: PesquisaProjeto): void {
    if (!pesquisaProjeto.id) {
      this.salvarPesquisaProjeto(pesquisaProjeto);
    } else {
      this.atualizarPesquisaProjeto(pesquisaProjeto);
    }
  }

  salvarPesquisaProjeto(PesquisaProjeto: PesquisaProjeto): void {
    this.pesquisaProjetoService.addPesquisaProjeto(PesquisaProjeto).subscribe(() => {
      this.listarPesquisaProjetos();
    });
  }

  atualizarPesquisaProjeto(PesquisaProjeto: PesquisaProjeto): void {
    this.pesquisaProjetoService.updatePesquisaProjeto(PesquisaProjeto.id, PesquisaProjeto).subscribe(() => {
      this.listarPesquisaProjetos();
    });
  }
  openDialog(row?: PesquisaProjeto): void {
    const isNewPesquisaProjeto = !row; // Verifica se é um novo pesquisaProjeto (adicionar) ou não (editar)
    console.log('Abrindo diálogo para Experimento com ID:', isNewPesquisaProjeto ? 'novo' : row.id);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.minWidth = "380px";
    dialogConfig.data = {
        pesquisaProjeto: isNewPesquisaProjeto ? new PesquisaProjeto() : row // Passa o objeto experimento se for uma edição
    };
  
    const dialogRef = this.dialog.open(PesquisaProjetoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.salvarOuAtualizarPesquisaProjeto(result);
        }
    });
}
  

  //deletar Experimento
  deletaPesquisaProjeto(id: number): void {
    this.pesquisaProjetoService.deletePesquisaProjeto(id).subscribe(() => {
      this.listarPesquisaProjetos();
    });
  }
}

  

