import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-equipameto-dialog',
  templateUrl: './equipameto-dialog.component.html',
  styleUrls: ['./equipameto-dialog.component.scss']
})
export class EquipametoDialogComponent {

  constructor(    private _form: FormBuilder,
    ) { }


}
