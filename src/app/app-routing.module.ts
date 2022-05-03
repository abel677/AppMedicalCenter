import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegisterComponent } from './paginas/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'principal', component: PrincipalComponent,
    children:
      [
        { path: '', component: DashboardComponent, },
        { path: 'paciente', component: PacienteComponent, }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
