import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './app/pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './app/pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './app/pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './app/pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
//Defino las rutas para cuando la persona ingresa: vacio, pais, region, capital, pais+codigo o alguna q no sea esas(**)     
    {
        path:'', 
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', 
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];


@NgModule({
imports:[ 
    RouterModule.forRoot(routes) //Llamo a las rutas que defini arriba

],
exports: [
  RouterModule //Exporto para usarlo afuera
]

})


export class AppRoutingModule{}