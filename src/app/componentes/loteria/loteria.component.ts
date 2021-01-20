import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  styleUrls: ['./loteria.component.css']
})
export class LoteriaComponent implements OnInit {
  objeto = {nombre: "Borrasca", apellido: "Filomena"};
  constructor() { }

  ngOnInit(): void {
  }

}
