import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../pesquisaProjeto/pesquisaProjeto.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EquipamentosComponent } from 'app/equipamentos/equipamentos.component';
import { EquipametoDialogComponent } from 'app/equipamentos/equipameto-dialog/equipameto-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTable, MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { ExperimentoComponent } from 'app/experimento/experimento.component';
import { ExperimentoDialogComponent } from 'app/experimento/experimento-dialog/experimento-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { PesquisaProjetoDialogComponent } from 'app/pesquisaProjeto/pesquisaProjeto-dialog/pesquisaProjeto-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatDialogModule,
    MatTableModule,
    BrowserModule,
    MatIconModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EquipamentosComponent,
    EquipametoDialogComponent,
    ExperimentoComponent,
    ExperimentoDialogComponent,
    PesquisaProjetoDialogComponent,
    

  ]
})

export class AdminLayoutModule {}
