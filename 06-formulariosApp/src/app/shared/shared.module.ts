import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent  //Para que sea público y se pueda usar afuera
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
 
})
export class SharedModule { }
