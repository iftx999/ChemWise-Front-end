import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { EquipametoDialogComponent } from './equipamentos/equipameto-dialog/equipameto-dialog.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EquipamentosComponent,
    EquipamentosComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
