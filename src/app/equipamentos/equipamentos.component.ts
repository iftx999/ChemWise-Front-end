import { Component, OnInit } from '@angular/core';
import { EquipametoDialogComponent } from './equipameto-dialog/equipameto-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.scss']
})
export class EquipamentosComponent implements OnInit {

  constructor(    private _dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }
  openPesquisaExportDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "500px";

    var dialogRef = this._dialog.open(EquipametoDialogComponent) ;
  }

}
