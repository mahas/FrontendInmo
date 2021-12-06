import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as  cryptoJS from 'crypto-js';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required]]

  })

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {

   
  }

  identificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value("hola");
    let clave= this.fgValidador.controls["usuario"].value("hola");
    let ClaveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario , ClaveCifrada).subscribe((datos:any)=>{
      //OK
      alert: ("Datos correctos")
    },(error:any)=>{
      //KO
      alert:("Datos incorrectos")
    })
    

  }

}
