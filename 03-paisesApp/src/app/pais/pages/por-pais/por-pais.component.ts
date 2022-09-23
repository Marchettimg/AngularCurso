import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent {

  termino:string='' 
  hayError: boolean = false;
  paises: Country[] = []
 

  //Inyecto el servicio en el cual tengo el método que llama a la API
  constructor(private paisService: PaisService){

  }

  buscar(termino: string){
    this.hayError = false;
    //Llamo al método que declare en el PaisService
    //El .suscribe es para que se puede ver el observable
    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;        
        },    
        error: (err)=>  {
          this.hayError = true;
          this.paises = []
        },
      })
  
  };

  sugerencias(termino: string){
    this.hayError=false;
    //TODO: crear sugernecias
  }

}
