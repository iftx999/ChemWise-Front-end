import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Regante } from 'app/model/reagente';
import { ReganteService } from 'app/service/reagenteService';

@Component({
  selector: 'app-reagente',
  templateUrl: './reagente.component.html',
  styleUrls: ['./reagente.component.scss']
})
export class ReagenteComponent implements OnInit {
  

  reagenteList: Regante[];
  reagenteDataSource: MatTableDataSource<Regante>;
  reagentColuns: string[] = ['nomeReagente', 'qtdDisponivel', 'undMedida', 'actions'];

  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private dialog: MatDialog,
    private reagenteService: ReganteService

  ) { }

  ngOnInit(): void {
  }
  listarReagentes(): void {
    this.reagenteService.getRegantes().subscribe(data => {
      console.log(data);
      this.reagenteList = data;
      this.reagenteDataSource = new MatTableDataSource(this.reagenteList);
    });
  }
  atualizarReagente(reagente: Regante): void {
    this.reagenteService.updateRegante(reagente.id, reagente).subscribe(() => {
      this.listarReagentes();
    });
  }

  salvarReagente(reagente: Regante): void {
    this.reagenteService.addRegante(reagente).subscribe(() => {
      this.listarReagentes();
    });
  }
  deletarReagente(id: number): void {
    this.reagenteService.deleteRegante(id).subscribe(() => {
      this.listarReagentes();
    });
  }
  openDialog(row?: Regante): void {
    const isNewReagente = !row; // Verifica se é um novo reagente (adicionar) ou não (editar)
  }
  

}
