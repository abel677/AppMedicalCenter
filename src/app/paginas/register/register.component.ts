import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister: FormGroup;
  invalid:boolean = false;

  constructor
  (
    private router: Router, private formBuilder: FormBuilder,
    private scripts:CargarScriptsService
  ) {
    this.FormBuilder();
    this.scripts.cargarScripts(['main']);
  }


  private FormBuilder() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.max(8)]]
    });
  }
  register() {
    if (this.formRegister.valid) {
      alert(10)
    }
  }


}
