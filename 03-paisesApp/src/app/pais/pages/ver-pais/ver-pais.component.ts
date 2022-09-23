import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //El signo ! es para que typescript me acepte la propiedad Country sin iniciar (en nulo sería)
  pais!: Country;


  //El constructor es ANTES de que se inicialice el componente
  //El ActivatedRoute es para poder suscribirnos a cualquier cambio del URL. El parametro puede tener cualquier nombre pero debe tener este tipado.
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService : PaisService) { }

  //El ngOnInit es cuando el componente esta INICIALIZADO
  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log(id);  //Devuelve el ID del país. Porq lo defini en el app-routing-module.ts

    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( pais => {
    //           console.log(pais);
    //       })   

    //   })

    // Se puede escribir el código anterior más simple:
    this.activatedRoute.params
      .pipe(
        switchMap( ( {id} ) => this.paisService.getPaisPorAlpha(id) ),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais = pais;
        // console.log(pais); ----> Lo agregue dentro del tap
        
      })


     
  }

}


// Dentro del .pipe() se pueden definir operadores para trabajar con la respuesta del activatedRoute.params. El switchMap es uno de ellos que permite ingresar un observable y recibir un observable.
//El tap es otro operador que me permite recibir la respuesta del observable e imprimir en consola lo que corresponda, por eso le ingreso el console.log entre (). De esa manera me ahorro de ponerlo dentro del subcribe