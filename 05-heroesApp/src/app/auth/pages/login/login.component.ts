import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})


export class LoginComponent {

  constructor(private router: Router,
              private authService: AuthService) { }

  login(){
    //Ir al backend
    //Tener un usuario almacenado en un servicio
    this.authService.login()
      .subscribe(resp => {
        //Si tengo un id (es decir que hay un usuario registrado, entoncers lo redirijo a la pagina de /heroes)
        if(resp.id) {
          console.log(resp)
          this.router.navigate(['./heroes'])
        }
      })

  }

  

}
