import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-formulario-clase',
  templateUrl: './formulario-clase.component.html',
  styleUrls: ['./formulario-clase.component.css']
})
export class FormularioClaseComponent implements OnInit {
  user: Usuario= new Usuario();
  users: Usuario[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  insertar(): void{ 
    this.users.push(this.user);
    this.user= new Usuario();
    localStorage.setItem("backup",JSON.stringify(this.users));
  }
  mostrarUsuario(user:Usuario):void{
    console.log(user.nombre+" "+user.apellido+" "+user.edad);
  }
}
