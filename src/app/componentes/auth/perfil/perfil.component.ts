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
  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    email:['',[Validators.required,Validators.email]],
    telefono:[undefined,[telfonoValido()]],
  });

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
        },
        error=>console.log(error)  
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
      error=>console.log(error)
    )
  }

}
