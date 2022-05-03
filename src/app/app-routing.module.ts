import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
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
        { path: 'user', loadChildren:()=> import('../app/modulos/user/user.module').then(m=>m.UserModule)},    
        
      ]
  },
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes,{
                        // PreloadAllModules  => cargar de forma lenta
      preloadingStrategy:QuicklinkStrategy // => cargar de forma rápida
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
