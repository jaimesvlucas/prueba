import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/clases/mensaje';
import { User } from 'src/app/clases/user';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {

  constructor(private servicioUsuario:UserService, private servicioMensaje:MensajesService, private fb:FormBuilder) { }

  usuarios: User[] = [];
  userSel: User;
  mensajes: Mensaje[] = [];
  mostrarMensajes: boolean=false;
  enviarMensajes: boolean=false;
  mensajeSel: Mensaje;
  formMensaje = this.fb.group({
    idDestinatario:[''],
    mensaje:['',[Validators.required]]
  });

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerMensajes():void{
    this.servicioMensaje.obtenerMensajes().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.mensajes= respuesta;
      },
      error=>console.log(error)
    )
  }

  obtenerUsuarios(): void{
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.usuarios = respuesta;
      },
      error=>console.log(error)
    )
  }

  escribirMensaje():void{
    this.servicioMensaje.enviarMensaje(this.formMensaje.value).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.enviarMensajes=false;
        this.formMensaje.reset();
      },
      error=>console.log(error)
    )
  }

  borrarMensaje():void{
    this.servicioMensaje.eliminarMensaje(this.mensajeSel.id).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.obtenerMensajes();
      },
      error=>console.log(error)
    )
  }
}
