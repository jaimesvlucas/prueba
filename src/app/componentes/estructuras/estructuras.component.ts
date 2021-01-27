import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  verdad: boolean = false;
  anios: number ;
  num1: number = 0;
  num2: number = 0;
  operador:string = "";
  operaciones:string[] = ["suma","resta","mult","div"];
  constructor() { }

  ngOnInit(): void {
  }

  muestraDatos(numero: number, indice:number, impar:boolean, primero:boolean, ultimo:boolean):void{
    console.log("El numero "+ numero+ " tiene el indice" + indice);
    console.log(impar?"es impar": "es par");
    if(primero)console.log("Es el primero");
    if(ultimo)console.log("Es el ultimo");
  }
}
