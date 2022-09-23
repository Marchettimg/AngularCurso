import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
              private router: Router ){  }



  //Devuelve un Observable de tipo booleano o una promesa que resuleve un booleano o un booleano. 
   canLoad(route: Route,
     segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
      
      // if ( this.authService.auth.id) {
      //   return true;
      // } 
      //  console.log('bloqueado por el AuthGuard - CanLoad')
      //   return false;


       //Llamo al método verificarAutenticacion que declaré en el servicio:
      return this.authService.verificaAutenticacion()   //esto me devuelve un Observable de tipo boolean
                  .pipe(
                    tap(estaAutenticado => {
                      if(!estaAutenticado) {
                        this.router.navigate(['./auth/login'])
                      }
                    })
      ); 
      

  }
  
  canActivate( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // if ( this.authService.auth.id) {
      //   return true;
      // } 
      //  console.log('bloqueado por el AuthGuard - CanLoad')
      //   return false;

      return this.authService.verificaAutenticacion()              
                .pipe(
                  tap(estaAutenticado => {
                    if(!estaAutenticado) {
                       this.router.navigate(['./auth/login']) //Si NO esta autenticado entonces redirijo a login
                    }
                  })
                )
                  

  }

      
  }


  
      
    
      
  

 



