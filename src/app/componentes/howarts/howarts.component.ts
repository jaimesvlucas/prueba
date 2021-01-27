import { Component, OnInit } from '@angular/core';
import { AlumnoHowarts } from 'src/app/clases/alumno-howarts';

@Component({
  selector: 'app-howarts',
  templateUrl: './howarts.component.html',
  styleUrls: ['./howarts.component.css']
})
export class HowartsComponent implements OnInit {
  alumnosHowarts: AlumnoHowarts[]=[];
  alumno: AlumnoHowarts = new AlumnoHowarts();
  indice: number=0;
  alumnoSeleccionado: AlumnoHowarts = new AlumnoHowarts();
  casas: string[]=["Gryffindor","Hufflepuff","Ravenclaw ","Slytherin"];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('howarts')!=null){
      this.alumnosHowarts = JSON.parse(localStorage.getItem('howarts'));
      this.indice = this.alumnosHowarts[this.alumnosHowarts.length-1].id+1;
    }
  }

  insertarAlumno(): void{
    this.alumno.id=this.indice;
    this.indice++;
    this.alumnosHowarts.push(this.alumno);
    this.alumno = new AlumnoHowarts();
    localStorage.setItem('howarts',JSON.stringify(this.alumnosHowarts));
  }

  borrarAlumno(indice:number, alumno:AlumnoHowarts):void{
    if(confirm("¿Seguro que quieres borar la nota: "+alumno.nombre+" ?")){
      this.alumnosHowarts.splice(indice,1);
      localStorage.setItem('howarts', JSON.stringify(this.alumnosHowarts));
    }
  }

  alumnoSelecc(alumno: AlumnoHowarts):void{
    this.alumnoSeleccionado = alumno;
  }

  editarAlumno(alumno:AlumnoHowarts):void{
    for(let i in this.alumnosHowarts){
      if(this.alumnosHowarts[i].id==alumno.id){
        this.alumnosHowarts[i]=alumno;
        this.alumnoSeleccionado=new AlumnoHowarts();
        localStorage.setItem('howarts',JSON.stringify(this.alumnosHowarts));
      }
    }
  }
}
