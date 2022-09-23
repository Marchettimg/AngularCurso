import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})


export class BusquedaComponent {

// El viewChild me permite acceder a un elemento en mi html. Puedo llamar al elemento 
//por su clase, o por su id. En este caso llamamos por id, del input en busqueda.component.html
// Si quiero saber el tipado de la propiedad txtBuscar, podemos consologuearla dentro de una funcion y ahi nos sale
// El signo de admiracion es un operador para asegurarse de que el elemento no es nulo
  
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; //como el ElementRef es generico, le colocamos entre <> el tipado


  //Con el constructor defino un atributo de la clase privado (el parametro), de tipo "GifsService", para luego llamarlo en la funcion buscar
  constructor(private gifsService: GifsService ){}


  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0) {return;} //Si es nulo que no haga nada

    this.gifsService.buscarGifs(valor) //llamo al metodo buscarGifs del servicio 

    //Le doy un valor vacio al input para que se vuelva a cero cuando doy enter
    this.txtBuscar.nativeElement.value = ''; 
  };

 
}

