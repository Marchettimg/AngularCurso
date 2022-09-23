import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../Interfaces/gifs.interface';

@Injectable({
  providedIn: 'root' //Le dice a Angular que este servicio va a ser unico y de manera global
})



export class GifsService {

  private apiKey: string = "ZOH6DYngAXtRTK7zfQ2OXIQ5kmLRPJWQ"
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = []
  public resultados:Gif[] = [];


  get historial(){
     return [...this._historial]; //El operador spread [...] sirve para romper la referencia hacia la propuedad privada declarada antes y genera un nuevo arreglo.
  }

  constructor(private http:HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //Es lo mismo que abajo
    // Le coloco el || [], para que, si es un "null" me devuelva un arreglo vacío. Ya q el 'getItem' puede ser un string o un null

    //Forma equivalente:
    // if(localStorage.getItem('historial')){
    //     this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }


  buscarGifs(query: string){

    query = query.trim().toLocaleLowerCase(); //paso a minusculas

    //Pregunto si el historial NO incluye el query ingresado:
    if(!this._historial.includes(query)){

      this._historial.unshift(query); //Lo inserto solo si se cumple la condicion, para evitar elementos repetidos

      this._historial = this._historial.splice(0,10); //Limitar el historial a 10

      //Para guardar la data que busco en el localStorage:
        //El JSON.stringgify me permite seleccionar strings del arreglo "_historial", ya que "setItem" solo admite strings
      localStorage.setItem('historial', JSON.stringify(this._historial)); 

      
    }  


    //Para poder colocar luego dentro del http.get algo mas resumido y no toda la url super larga
    
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query)

    
    //Haciendo la peticion a la API:
    //Al lado del get pongo el tipado entre <>. Es la interface que generé en quicktype y que copie en gifs.interface.ts

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe(resp => {
        this.resultados = resp.data
        localStorage.setItem('resultados',JSON.stringify(this.resultados))
      })
  }



}


