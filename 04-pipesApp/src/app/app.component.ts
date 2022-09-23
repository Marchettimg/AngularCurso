import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  // title = 'pipesApp';

  // nombre: string = 'guillermina'

  // mostrarNombre(){
  //   console.log(this.nombre)
  // }

  //Inyecto el primengConfig que me permite luego llamar al ripple (es el efecto de burbujita cuando hago click en el header del Fielset )
  constructor(private primengConfig: PrimeNGConfig){  }

  //Acá llamo al ripple y lo asigno en true
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

}
