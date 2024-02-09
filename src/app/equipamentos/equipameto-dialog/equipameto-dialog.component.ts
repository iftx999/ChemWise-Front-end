import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipamento } from 'app/model/equipamento';
import { EquipamentoService } from 'app/service/equipamento.service';

@Component({
  selector: 'app-equipameto-dialog',
  templateUrl: './equipameto-dialog.component.html',
  styleUrls: ['./equipameto-dialog.component.scss']
})
export class EquipametoDialogComponent {

  form: FormGroup;
  equioamentoList: Equipamento[];

  isEdit: boolean;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {equipamento: Equipamento},   
     private _form: FormBuilder,
     private servic: EquipamentoService
    ) { 
      this.isEdit= Boolean(this.data.equipamento.id);
    }

  ngOnInit(): void {
 
    this.form = this._form.group({
      id: [this.data.equipamento.id],
      nome: [this.data.equipamento.nome_equipamento, Validators.maxLength(100)],
      status: [this.data.equipamento.status, Validators.maxLength(100)],
      
    });
    }
    onSubmit(): void {
      const equipamento: Equipamento = {
          id: this.form.get('id').value,
          nome_equipamento: this.form.get('nome').value,
          status: this.form.get('status').value
      };
  
      // Enviar os dados do formulário
      this.servic.addEquipamento(equipamento).subscribe(
          response => {
              console.log('Dados enviados com sucesso:', response);
              // Reinicializar o formulário ou outras ações
          },
          error => {
              console.error('Erro ao enviar dados:', error);
              // Tratar o erro, se necessário
          }
      );
  }
  



}
