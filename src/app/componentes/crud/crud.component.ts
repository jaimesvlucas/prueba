import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/clases/note';
import { NotasService } from 'src/app/servicios/notas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  formNuevo: FormGroup = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl('',Validators.required),
    contenido: new FormControl('', Validators.required)
  })
  notaNueva: Note = new Note();
  notaSeleccionada: Note = new Note();
  notas: Note[]=[];
  busqueda: string;
  temporizador: any = null;
  creada :boolean=false;
  constructor(private servicio:NotasService) { }

  ngOnInit(): void {
    this.escribirNotas();
  }

  escribirNotas():void{
    this.servicio.leerNotas().subscribe(
      respuesta=>{
        console.log(respuesta);
        this.notas=respuesta
      },
      error=>console.log(error)
    )
  }

  crearNota(entrada:Note): void{
    this.servicio.insertarNota(entrada).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formNuevo.reset();
        this.creada=true;
        setTimeout(()=>{this.creada=false},3000);
        this.escribirNotas();
      }
    )
  }

  eliminarNota():void{
    this.servicio.borrarNota(this.formNuevo.value.id).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formNuevo.reset();
        this.escribirNotas();
      },
      error=>console.log(error)
    )
  }

  editarNota():void{
    this.servicio.editarNota(this.formNuevo.value).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formNuevo.reset();
        this.escribirNotas();
      },
      error=>console.log(error)
    )
  }

  buscarNotas():void{
    this.servicio.buscarNotas(this.busqueda).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.notas=respuesta;
      },
      error=>console.log(error)
    )
  }

  buscarConRetraso():void{
    if(this.temporizador==null){
      this.temporizador=setTimeout(()=>{
        this.buscarNotas();
        this.temporizador=null;
      },3000);
    }
  }
}
