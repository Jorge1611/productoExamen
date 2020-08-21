import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private loginServices: LoginService,
              private formBuilder: FormBuilder,
              private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  login() {
    const model: Login = new Login();
    model.email = this.f.email.value;
    model.password = this.f.password.value;

    this.loginServices.login(model)
    .subscribe(
      login => {
        localStorage.setItem('token', login.token);
        this.router.navigate(['/products']);
      },
      err => {
      }
    );
  }

}
