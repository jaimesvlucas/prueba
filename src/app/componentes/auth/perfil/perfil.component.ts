import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { Validators, FormBuilder } from '@angular/forms';
import { telfonoValido, dniValido } from 'src/app/validaciones/tlf-valido';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private serviciosUsuario:UserService, private fb:FormBuilder, private irHacia:Router) { }
  
  perfil: User={};
  editar: boolean = false;
  borrar: boolean = false;
  inputBorrar: string="";
  respuestaCreada:boolean= false;
  errorRespuesta:boolean =false;
  mensaje:string;
  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    email:['',[Validators.required,Validators.email]],
    telefono:[undefined,[telfonoValido()]],
  });

  formImagen = this.fb.group({
    imagen: ['', Validators.required]
  })

  ngOnInit(): void {
    this.cargarPerfil();
  }

  cargarPerfil():void{
    this.serviciosUsuario.obtenerPerfil().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.perfil=respuesta;
      },
      error=>console.log(error)
    );
  }

  submit(): void{
      this.serviciosUsuario.editarPerfil(this.perfil).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.editar=false;
          this.respuestaCreada=true;
          this.mensaje="El perfil ha sido editado";
          setTimeout(()=>{this.respuestaCreada=false},3000);
        },
        error=>{
          console.log(error)
          this.errorRespuesta = true;
          this.mensaje = error.error.error;
          setTimeout(()=>{this.errorRespuesta=false},3000);
        }  
      )
  }

  borrarUsuario():void{
    this.serviciosUsuario.eliminarPerfil().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.serviciosUsuario.logOut();
        this.borrar=false;
        this.inputBorrar="";
        this.irHacia.navigate(['/login']);
      },
      error=>{
        console.log(error)
        this.errorRespuesta = true;
        this.mensaje = error.error.error;
        setTimeout(()=>{this.errorRespuesta=false},3000);
      }
    )
  }

  cambiaImagen(evento): void{
    if(evento.target.files){
      this.formImagen.get('imagen').setValue(evento.target.files[0])
    }
  }
  
  subirImagen(): void{
    const formData = new FormData()
    formData.append('imagen', this.formImagen.get('imagen').value)
    this.serviciosUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.respuestaCreada=true;
        this.mensaje="Se ha subido la imagen correctamente";
        setTimeout(()=>{this.respuestaCreada=false},3000);
      },
      error => {
        console.log(error)
        this.errorRespuesta = true;
        this.mensaje = error.error.error;
        setTimeout(()=>{this.errorRespuesta=false},3000);
      }
    )
  }
  foto: File
  tengoFoto(evento): void{
    if(evento.target.files){
      this.foto = evento.target.files[0]
    }
  }
  subirFoto(): void{
    const formData = new FormData()
    formData.append('imagen', this.foto)
    this.serviciosUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.respuestaCreada=true;
        this.mensaje="Se ha subido la imagen correctamente";
        setTimeout(()=>{this.respuestaCreada=false},3000);
      },
      error => {
        console.log(error)
        this.errorRespuesta = true;
        this.mensaje = error.error.error;
        setTimeout(()=>{this.errorRespuesta=false},3000);
      }
    )
  }

}
