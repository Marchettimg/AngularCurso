import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';




@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})


export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Guillermina'
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarNombre(){
    this.nombre = 'Juan';
    this.genero = 'masculino'
  }


  //i18nPlural

  clientes: string[]=['María', 'Pedro', 'Juan', 'Hernando', 'Fernando']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Guillermina',
    edad: 36,
    direccion: 'Olavarría, Buenos Aires'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

//AsyncPipe -- Se aplica solo a observables o a promesas
//Va a imprimir en pantalla los valores del observable o de la promesa

miObservable = interval(1000); 
//Observable que emite valores numericos ( 0, 1, 2, 3...)

valorPromesa = new Promise((resolve, reject) => {
      
    setTimeout(() => {
        resolve('Tenemos data de promesa')
      }, 3500);

});

}



//NOTA: cuando veamos un [object object] significa que es la representacion toString de un objeto