import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isEdit: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { equipamento: Equipamento },
    private _formBuilder: FormBuilder,
    private equipamentoService: EquipamentoService
  ) {
    this.isEdit = !!this.data.equipamento.id; // Verifica se está editando
    this.createForm();
  }

  createForm(): void {
    console.log('ID do equipamento recebido:', this.data.equipamento.id);
    this.form = this._formBuilder.group({
      id: [this.data.equipamento.id],
      nome: [this.data.equipamento.nome_equipamento, Validators.maxLength(100)],
      status: [this.data.equipamento.status, Validators.maxLength(100)]
    });
  }
  

  onSubmit(): void {
    const equipamento: Equipamento = {
      id: this.form.get('id').value,
      nome_equipamento: this.form.get('nome').value,
      status: this.form.get('status').value
    };

    if (this.isEdit) {
      // Atualizar equipamento existente
      this.equipamentoService.updateEquipamento(this.data.equipamento.id, equipamento).subscribe(
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
      this.equipamentoService.addEquipamento(equipamento).subscribe(
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
