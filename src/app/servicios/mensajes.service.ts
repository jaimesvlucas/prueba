import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';
const url = 'http://localhost/backendphp/mensajes/';
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  obtenerMensajes():Observable<any>{
    return this.http.get(url);
  }

  enviarMensaje(mensaje:Mensaje):Observable<any>{
    return this.http.post(url,mensaje);
  }

  eliminarMensaje(id):Observable<any>{
    return this.http.delete(url+id);
  }
}
