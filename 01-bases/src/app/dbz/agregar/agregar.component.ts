import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})



export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  } 

  constructor(private DbzService: DbzService){
    // Este constructor sirve para usar el dbsService en la clase
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) { return;}

    // this.onNuevoPersonaje.emit(this.nuevo)
    this.DbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }



}



  



