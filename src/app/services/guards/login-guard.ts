import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public loginService: LoginService,
              public router: Router){}

  canActivate(){
    if (this.loginService.estaLogueado()) {
      console.log('paso por el guard');
      return true;
    } else {
      console.log('no paso por el guard');
      // this.router.navigate(['/login']);
      return true;
    }
  }
}
