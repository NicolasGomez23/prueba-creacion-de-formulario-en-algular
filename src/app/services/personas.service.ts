import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
   //Se inicializa el servicion en la clase Personasservice
 private API_PERSONAJES = "http://190.60.101.59:6003/api/Personas"
  constructor(private http: HttpClient) {
    console.log('servicio persona')
  }
  public postAllpersonajes(cuerpo:any): Observable<any> {
    return this.http.post<any>(this.API_PERSONAJES, cuerpo);

  }
}
