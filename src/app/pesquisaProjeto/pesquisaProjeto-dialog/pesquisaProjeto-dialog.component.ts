import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Experimento} from 'app/model/experimento';
import { PesquisaProjeto } from 'app/model/pesquisaProjeto';
import { PesquisaProjetoService } from 'app/service/pesquisaProjeto.service';

@Component({
  selector: 'app-pesquisaProjeto-dialog',
  templateUrl: './pesquisaProjeto-dialog.component.html',
  styleUrls: ['./pesquisaProjeto-dialog.component.scss']
})
export class PesquisaProjetoDialogComponent {

  form: FormGroup;
  isEdit: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pesquisaProjeto: PesquisaProjeto },
    private _formBuilder: FormBuilder,
    private pesquisaProjetoService: PesquisaProjetoService, 
  ) {
    this.isEdit = !!this.data.pesquisaProjeto.id; // Verifica se está editando
    this.createForm();
  }

  createForm(): void {
    console.log('ID do equipamento recebido:', this.data.pesquisaProjeto.id);
    this.form = this._formBuilder.group({
      id: [this.data.pesquisaProjeto.id],
      descricao: [this.data.pesquisaProjeto.descricao, Validators.maxLength(100)],
      nomeProjeto: [this.data.pesquisaProjeto.nomeprojeto, Validators.maxLength(100)],

    });
  }
  

  onSubmit(): void {
    const pesquisaProjeto: PesquisaProjeto = {
      id: this.form.get('id').value,
      descricao: this.form.get('descricao').value,
      nomeprojeto: this.form.get('nomeProjeto').value,
    };

    if (this.isEdit) {
      // Atualizar equipamento existente
      this.pesquisaProjetoService.updatePesquisaProjeto(this.data.pesquisaProjeto.id, pesquisaProjeto).subscribe(
        response => {
          console.log('Equipamento atualizado com sucesso:', response);
          // Outras ações, se necessário
        },
        error => {
          console.error('Erro ao atualizar equipamento:', error);
          // Tratar o erro, se necessário
        }
      );
    } else {
      // Adicionar novo equipamento
      this.pesquisaProjetoService.addPesquisaProjeto(pesquisaProjeto).subscribe(
        response => {
          console.log('Equipamento adicionado com sucesso:', response);
          // Outras ações, se necessário
        },
        error => {
          console.error('Erro ao adicionar equipamento:', error);
          // Tratar o erro, se necessário
        }
      );
    }
  }
}
