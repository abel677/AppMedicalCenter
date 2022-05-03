import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  titulo:string = " ";

  constructor( private scripts:CargarScriptsService) { 
    this.scripts.cargarScripts(["main"]);
  }

  ngOnInit(): void {
    this.titulo = "Dashboard";
  }

}
