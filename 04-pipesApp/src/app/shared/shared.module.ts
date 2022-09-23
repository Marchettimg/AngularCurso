import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { MenuComponent } from './menu/menu.component';

//Para darme cuenta cuando debo exportar un componente, es cuando voy a usarlo por fuera del modulo. Es decir, que tengo que salir de la carpeta que contiene al modulo. En este caso, el MenuComponent lo voy a usar afuera por eso lo porngo en exports

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
