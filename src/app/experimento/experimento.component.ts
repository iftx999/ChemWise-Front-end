import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EquipametoDialogComponent } from 'app/equipamentos/equipameto-dialog/equipameto-dialog.component';
import { Experimento } from 'app/model/experimento';
import { ExperimentoService } from 'app/service/experimento.service';
import { ExperimentoDialogComponent } from './experimento-dialog/experimento-dialog.component';

@Component({
  selector: 'app-experimento',
  templateUrl: './experimento.component.html',
  styleUrls: ['./experimento.component.scss']
})
export class ExperimentoComponent implements OnInit{

  experimentoList: Experimento[];
  experimentoDataSource: MatTableDataSource<Experimento>;
  experimentoColuns: string[] = ['titulo', 'descricao', 'data', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private experimentoService: ExperimentoService
  ) { }

  ngOnInit(): void {
    this.listarExperimentos();
  }

  listarExperimentos(): void {
    this.experimentoService.getExperimentos().subscribe(data => {
      console.log(data);
      this.experimentoList = data;
      this.experimentoDataSource = new MatTableDataSource(this.experimentoList);
    });
  }

  salvarOuAtualizarExperimento(experimento: Experimento): void {
    if (!experimento.id) {
      this.salvarExperimento(experimento);
    } else {
      this.atualizarExperimento(experimento);
    }
  }

  salvarExperimento(Experimento: Experimento): void {
    this.experimentoService.addExperimento(Experimento).subscribe(() => {
      this.listarExperimentos();
    });
  }

  atualizarExperimento(Experimento: Experimento): void {
    this.experimentoService.updateExperimento(Experimento.id, Experimento).subscribe(() => {
      this.listarExperimentos();
    });
  }
  openDialog(row?: Experimento): void {
    const isNewExperimento = !row; // Verifica se é um novo experimento (adicionar) ou não (editar)
    console.log('Abrindo diálogo para Experimento com ID:', isNewExperimento ? 'novo' : row.id);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.minWidth = "380px";
    dialogConfig.data = {
        experimento: isNewExperimento ? new Experimento() : row // Passa o objeto experimento se for uma edição
    };
  
    const dialogRef = this.dialog.open(ExperimentoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.salvarOuAtualizarExperimento(result);
        }
    });
}

  //deletar Experimento
  deleteExperimentos(id: number): void {
    this.experimentoService.deleteExperimento(id).subscribe(() => {
      this.listarExperimentos();
    });
  }
  

}



