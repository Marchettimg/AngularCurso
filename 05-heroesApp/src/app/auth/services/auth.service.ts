import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined; //Para almacenar la info del usuario

  get auth(){
    return {...this._auth } //Lo desestructuro ({...}) para asegurarme que no se va a modificar accidentalmente
  }


  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {

      if (!localStorage.getItem('token')) {
        return of(false); // El 'of' me convierte en Observable
        
      }

      return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
              .pipe(
                map( auth => {
                  this._auth = auth;
                  return true    //Le digo que si el auth tiene valor me retorne un true
                })
              );
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
              .pipe(
                tap( auth => {
                  this._auth = auth; //Toma la respuesta del backend (en este caso un Auth, y la carga en la variable _auth que creamos ANTES que pase por el subscribe que puse en mi login.component.ts)
                  localStorage.setItem('token', auth.id) //Guarda el id en el localStorage

                })  
              )
  }

  logout() {
    this._auth = undefined
  }

}

