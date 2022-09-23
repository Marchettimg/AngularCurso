import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 90%;
      border-radius: 5px
    }
  `
  ]
})



export class AgregarComponent implements OnInit {

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics, //Pongo un valor cualquiera por defecto
    alt_img: ''
  }

  publishers = [
    {
      id:'DC Comics',
      descr: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      descr: 'Marvel - Comics'
    },
  ]

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { } 
              
//El MatSnackBar sirve para que aparezca un cartelito al ejecutar algo (ej cuando agregar o modificas). El MatDialog, sirve para que aparezca un cartel de consulta antes de ejecutar una accion (ej eliminar)


  ngOnInit(): void {

    //Si la ruta donde estamos, incluye 'editar', entonces mando a llamar al id:
    if(this.router.url.includes('editar')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroePorId(id) )
      )
        .subscribe(heroe => this.heroe = heroe )
    } else {return;}
    

  }

  //Va a permitir guardar un heroe que creamos de cero o guardar los cambios si editamos
  guardar(){

    if(this.heroe.superhero.trim().length === 0){
      return;
    }  
    //Si el heroe ya tiene un id, entonces es porque lo estamos EDITANDO. Sino, es porque es NUEVO y lo queremos guardar

    if(this.heroe.id) {
        this.heroesService.actualizarHeroe(this.heroe)
          .subscribe(heroe => this.mostrarSnackBar('Registro actualizado')) //Peticion PUT - editar
    } else {
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe( heroe => { 
        this.router.navigate(['/heroes/editar', heroe.id])
        this.mostrarSnackBar('Registro creado')  //Peticion POST- agregar
      });

    }    
  
  }

  borrarHeroe(){

    //Para usar el dialog, debo generar un nuevo componente donde escribiré en el html lo que quiero mostrar.
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed()
      .subscribe( result => {
        if(result) {
          this.heroesService.eliminarHeroe(this.heroe.id!)
            .subscribe(resp=> {
          this.router.navigate(['/heroes'])
      })
        }
      }
    )

    
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 2500
    });
  }

}
