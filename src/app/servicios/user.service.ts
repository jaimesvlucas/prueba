import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, AccesoUsuario } from '../clases/user';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registrar(usuario: User):Observable<any>{
    return this.http.post(url,usuario);
  }
  
  acceso(usuario:AccesoUsuario):Observable<any>{
    return this.http.post(url+"login",usuario);
  }

  guardarToken(token:string):void{
    localStorage.setItem('userToken', JSON.stringify(token));
  }

  isLogged():boolean{
    return !!localStorage.getItem('userToken');
  }

  logOut():void{
    localStorage.removeItem('userToken');
  }

  leerToken():string{
    return localStorage.getItem('userToken');
  }
}
