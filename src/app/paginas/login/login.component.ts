import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResposeI } from 'src/app/interface/userResponse.interface';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;
  mensaje: string = "";
  invalid: boolean = false;


  constructor
  (
    private formBuilder: FormBuilder, private loginService: LoginService,
    private router: Router, private scripts: CargarScriptsService
  ) 
  {
    this.FormBuilder();
    this.scripts.cargarScripts(['main']);
  }

  private FormBuilder() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  
  login() {
    if (this.formLogin.valid) {
      this.loginService.postLogin(this.formLogin.value).subscribe(
        (user: UserResposeI) => {
          localStorage.setItem('token', user.acces_token);
          this.router.navigate(['/principal']);
        },
        (err) => {
          this.mensaje = err.error.message;
          this.invalid = true;
        }
      );

    }else{
      this.formLogin.markAsTouched();
    }

  }



}
