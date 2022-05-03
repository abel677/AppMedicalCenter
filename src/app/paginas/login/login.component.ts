import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UserResposeI } from 'src/app/interface/userResponse.interface';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor
    (
      private formBuilder: FormBuilder, private loginService: LoginService,
      private router: Router, private scripts: CargarScriptsService
    ) {
    this.FormBuilder();
    this.scripts.cargarScripts(['main']);
  }

  ngOnInit(): void {

  }
  private FormBuilder() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  mensaje: string = "";
  invalid: boolean = false;
  data:UserResposeI;

  login() {
    if (this.formLogin.valid) {
      this.loginService.postLogin(this.formLogin.value).subscribe(
        (res) => {
          if (res) {
            this.data = res;
            this.router.navigate(['principal']);
          }
          this.mensaje = "credenciales invalidas";
        },


      );
      this.invalid = true;
    } else {
      this.formLogin.markAsTouched();

    }

  }



}
