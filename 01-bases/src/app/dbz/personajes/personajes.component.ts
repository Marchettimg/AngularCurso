import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})



export class PersonajesComponent  {

//@Input('data') personajes: Personaje [] = []

get personajes(){
  return this.dbzService.personajes;  //este es el getter que cree en el dbz.service.ts
}

constructor(private dbzService: DbzService){}

 }


 