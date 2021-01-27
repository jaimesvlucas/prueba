import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

variable:String = "texto de prueba";
num1: number = 0;
num2: number = 0;
letras: String[] = ["a","b","c"];
usuarios=[
  {nombre:"manolo",apellido:"lopez"},
  {nombre:"manolo1",apellido:"lopez1"},
  {nombre:"manolo2",apellido:"lopez2"}
];
usuario:String = "";
usuarios1: Usuario[]= [
  {nombre:"manolo",apellido:"lopez"},
  {nombre:"manolo1",apellido:"lopez1"},
  {nombre:"manolo2",apellido:"lopez2"}
];

  constructor() { }

  ngOnInit(): void {
  }

  sumaNumeros():number{
    return this.num1+this.num2;
  }

  muestraUsuario(item):void{
    this.usuario="El usuario ha hecho clic en "+item.nombre+" "+item.apellido;
  }

  ngOnDestroy():void{
    alert("hasta luego");
  }
}
