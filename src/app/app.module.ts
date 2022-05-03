import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { SidebarComponent } from './plantilla/sidebar/sidebar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicios/login.service';
import { LoginComponent } from './paginas/login/login.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { CargarScriptsService } from './servicios/cargar-scripts.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PrincipalComponent,
    LoginComponent,
    DashboardComponent,
    PacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,LoginService, CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }