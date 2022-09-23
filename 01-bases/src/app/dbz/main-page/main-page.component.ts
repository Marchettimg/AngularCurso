import { Component, OnInit } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})




export class MainPageComponent {

  
  nuevo:Personaje = {
    nombre:'Maestro Roschi',
    poder: 50
  }

 
  constructor(){ }



}


// cambiarNombre(event: any) {
//   console.log(event)
// }

// agregar(){
//   if(this.nuevo.nombre.trim().length === 0) { return;}

//   console.log(this.nuevo)

//   this.personajes.push(this.nuevo)

//   this.nuevo = {
//     nombre: '',
//     poder: 0
//   }

// console.log(this.personajes)
