import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs'
import { MatRippleModule } from '@angular/material/core';



import { ConfirmModule } from './confirm/confirm.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSortModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDividerModule,
        MatChipsModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatTreeModule,
        MatMenuModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTooltipModule,
        MatTabsModule,
        MatRippleModule,

       

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSortModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDividerModule,
        MatChipsModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatTreeModule,
        MatMenuModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatTooltipModule,
        MatTabsModule,
        MatRippleModule,

     

        ConfirmModule
    ]
})
export class SharedModule {
}
