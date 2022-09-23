import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

//Los servicios son sigletons (estan de manera global en la app)

@Injectable({
  providedIn: 'root'
})


export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  //retorno el HttpParams, para setearle los fields que quiero traer de la API.
  //Luego llamo esta función dentro de cada método, asi:
  //  return this.http.get<Country[]>(url, {params: this.httpParams})
  get httpParams(){
    return new HttpParams()
          .set('fields','name,capital,alpha2Code,flag,population')
  }
  
  
  //Inyecto el modulo http para hacer la peticion a la API
  constructor(private http: HttpClient) { }

  //Metodo que recibe el termino y retorna un observable
  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}?fields=name,capital, alpha2Code,flag,population`
    //Llamo a la API mediante http. No olvidar importar el HttpClientModule en el app.module.ts. Va a retornar un observable
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }


  buscarPorCapital(capital: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }

  buscarRegion(region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/regionalbloc/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
  }

  //Alpha es el código del país dentro de la API. Importante: quitar los [] luego de Country, ya que no devolverá un arreglo sino un país (chequear esto viendo la respuesta de la API en Postman)
  getPaisPorAlpha(id: string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)
  }


}
