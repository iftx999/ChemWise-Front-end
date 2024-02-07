import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipametoDialogComponent } from './equipameto-dialog/equipameto-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EquipamentoService } from 'app/service/equipamento.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Equipamento } from 'app/model/equipamento';


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

  
  //salvar equipamento
  salvarEquipamento(equipamento: Equipamento): void {
    this.eqpService.addEquipamento(equipamento).subscribe((data) => {
      this.listarEquipamentos();
    });
  }

//atualizar equipamento
  atualizaCanal(id: number, equipamento: Equipamento): void {
    this.eqpService.updateEquipamento(id, equipamento).subscribe((data) => {
      this.listarEquipamentos();
    });
  }




  openDialog(row?: Equipamento): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.minWidth = "380px";

    dialogConfig.data = {
      equipamento: row ? row : new Equipamento()
    };

    let dialogRef = this._dialog.open(EquipametoDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) { return; }

        if (!result.id) {
          this.salvarEquipamento(result);
        } else {
          this.atualizaCanal(result.id, result);
          
        }
      });
  }

}
