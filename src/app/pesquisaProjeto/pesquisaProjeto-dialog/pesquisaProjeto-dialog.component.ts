import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExperimentoService } from 'app/service/experimento.service';
import {Experimento} from 'app/model/experimento';

@Component({
  selector: 'app-experimento-dialog',
  templateUrl: './experimento-dialog.component.html',
  styleUrls: ['./experimento-dialog.component.scss']
})
export class PesquisaProjetoDialogComponent {

  form: FormGroup;
  isEdit: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { experimento: Experimento },
    private _formBuilder: FormBuilder,
    private experimentoService: ExperimentoService, 
  ) {
    this.isEdit = !!this.data.experimento.id; // Verifica se está editando
    this.createForm();
  }

  createForm(): void {
    console.log('ID do equipamento recebido:', this.data.experimento.id);
    this.form = this._formBuilder.group({
      id: [this.data.experimento.id],
      descricao: [this.data.experimento.descricao, Validators.maxLength(100)],
      titulo: [this.data.experimento.titulo, Validators.maxLength(100)],
      data_cadas: [this.data.experimento.data_cadas, Validators.maxLength(100)]

    });
  }
  

  onSubmit(): void {
    const experimento: Experimento = {
      id: this.form.get('id').value,
      titulo: this.form.get('titulo').value,
      descricao: this.form.get('descricao').value,
      data_cadas: this.form.get('data_cadas').value
    };

    if (this.isEdit) {
      // Atualizar equipamento existente
      this.experimentoService.updateExperimento(this.data.experimento.id, experimento).subscribe(
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
      this.experimentoService.addExperimento(experimento).subscribe(
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
