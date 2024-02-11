import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipametoDialogComponent } from './equipameto-dialog/equipameto-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  equipamentoColuns: string[] = ['nome_equipamento', 'status', 'actions'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private equipamentoService: EquipamentoService
  ) { }

  ngOnInit(): void {
    this.listarEquipamentos();
  }

  listarEquipamentos(): void {
    this.equipamentoService.getEquipamentos().subscribe(data => {
      console.log(data);
      this.equipamentoList = data;
      this.equipamentoDataSource = new MatTableDataSource(this.equipamentoList);
    });
  }

  salvarOuAtualizarEquipamento(equipamento: Equipamento): void {
    if (!equipamento.id) {
      this.salvarEquipamento(equipamento);
    } else {
      this.atualizarEquipamento(equipamento);
    }
  }

  salvarEquipamento(equipamento: Equipamento): void {
    this.equipamentoService.addEquipamento(equipamento).subscribe(() => {
      this.listarEquipamentos();
    });
  }

  atualizarEquipamento(equipamento: Equipamento): void {
    this.equipamentoService.updateEquipamento(equipamento.id, equipamento).subscribe(() => {
      this.listarEquipamentos();
    });
  }

  openDialog(row?: Equipamento): void {
    console.log('Abrindo diálogo para equipamento com ID:', row ? row.id : 'novo');
    console.log(row ? row : new Equipamento());
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.minWidth = "380px";
    dialogConfig.data = {
      equipamento: row ? row : new Equipamento()
    };
  
    const dialogRef = this.dialog.open(EquipametoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.salvarOuAtualizarEquipamento(result);
      }
    });
  }
  

}
