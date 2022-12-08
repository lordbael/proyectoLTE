import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    PagesComponent,
    ClientesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxChartsModule
    
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    
  ]
})
export class PagesModule { }
