import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private baseService: BaseService,
            private router: Router) { }

  login(login: Login): Observable<Login> {
    return this.baseService
    .post<Login>('http://localhost:3000/login'
    , login);
  }

  estaLogueado() {
    return (localStorage.getItem('token').length > 5) ? true : false;
  }

  logOut() {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }

}
