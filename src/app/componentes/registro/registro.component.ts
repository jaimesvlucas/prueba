import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { dniValido, telfonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
    apellido: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    dni: new FormControl('',Validators.required),
    telefono: new FormControl(undefined,Validators.required)
  });

  formRegister2 = this.formBuilder.group({
    nombre: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    apellido: ['', [Validators.required,Validators.maxLength(50)]],
    password: ['', [Validators.required,Validators.minLength(9)]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required, dniValido()]],
    telefono: [undefined, [Validators.required, telfonoValido()]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  evaluaFormulario():void{
    console.log("evaluando");
    console.log(this.formRegister.getRawValue());
    if(this.formRegister.valid)console.log("Formulario Verificado");
    else console.log("hay un error en uno de los campos del formulario");
  }

  get nombre1(){return this.formRegister2.get("nombre");}
  get apellido1(){return this.formRegister2.get("apellido");}
  get password1(){return this.formRegister2.get("password");}
  get email1(){return this.formRegister2.get("email");}
  get dni1(){return this.formRegister2.get("dni");}
  get telefono1(){return this.formRegister2.get("telefono");}

}
