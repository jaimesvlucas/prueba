import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dniValido, telfonoValido } from 'src/app/validaciones/tlf-valido';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['',[Validators.required, Validators.minLength(4)]],
    password2:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    telefono:[undefined,[telfonoValido()]],
    dni:['',[Validators.required, dniValido()]]
  });
  constructor(private fb:FormBuilder, private servicioUsuario: UserService, private irHacia:Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    if(this.formRegister.value.password==this.formRegister.value.password2){
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.servicioUsuario.guardarToken(respuesta);
          console.log(localStorage.getItem('userToken'));
          this.irHacia.navigate(['/perfil']);
        },
        error=>console.log(error)  
      )
    }else{
      alert('Las contraseñas no coinciden');
    }
  }
}
