import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'guillermina'
  nombreUpper: string = 'GUILLERMINA'
  nombreCompleto: string = 'guIllermina maRChetti';

  fecha: Date = new Date(); //devuele la fehca del dia de hoy

}
