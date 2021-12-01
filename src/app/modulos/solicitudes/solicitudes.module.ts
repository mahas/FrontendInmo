import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitud-routing.module';
import { AsignarSolicitudComponent } from './asignar-solicitud/asignar-solicitud.component';


@NgModule({
  declarations: [
    AsignarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
