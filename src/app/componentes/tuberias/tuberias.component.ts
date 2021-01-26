import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {

  usuario: string = 'jaime sanchez-v lucas'
  mes: string = 'ENERO'
  texto: string = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam nesciunt assumenda. Earum quam vel corrupti ipsam blanditiis soluta quo officia ut fugit dolore. Asperiores quibusdam ratione aspernatur inventore nisi!";
  fecha: Date = new Date();
  dinero: number = 12.40;
  numero_pi: number = Math.PI;
  preposiciones: string[] = ["a", 'ante', 'bajo', 'cabe', 'con', 'contra', 'de', 'desde']
  usuarios = [
    {
      nombre: "Jaime",
      apellidos: "Sanchez-V Lucas",
      edad: 17
    },
    {
      nombre: "Juana",
      apellidos: "Rivas Monreal",
      edad: 26
    },
    {
      nombre: "Pepe",
      apellidos: "Belmonte",
      edad: 60
    }
  ]

  dni: number;

  constructor() { }

  ngOnInit(): void {
  }

}
