import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipametoDialogComponent } from './equipameto-dialog/equipameto-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EquipamentoService } from 'app/service/equipamento.service';
import { Equipamento } from 'app/model/equipamento';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.scss']
})
export class EquipamentosComponent implements OnInit {

  equipamentoList: Equipamento[];
  equipamentoDataSource: MatTableDataSource<Equipamento>;
  equipamentoColuns: string[] = ['nome_equipamento', 'status'];

  @ViewChild(MatSort) sort: MatSort;



  constructor(    private _dialog: MatDialog,
    public eqpService: EquipamentoService,



    ) { }

  ngOnInit(): void {
    this.listarEquipamentos();
  }
   
  
  listarEquipamentos(): void {
  this.eqpService.getEquipamentos().subscribe((data) => { 
      this.equipamentoList = data; // Atualize a lista de equipamentos
      this.equipamentoDataSource = new MatTableDataSource(this.equipamentoList); // Atualize o dataSource da tabela
    }
    );
  } 




  openPesquisaExportDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "500px";

    var dialogRef = this._dialog.open(EquipametoDialogComponent) ;
  }

}
