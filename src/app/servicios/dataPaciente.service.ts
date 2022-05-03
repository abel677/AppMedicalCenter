import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from "rxjs";
import { PacienteI } from '../interface/paciente-i';
import { RespondeI } from '../interface/responde-i';

@Injectable({
  providedIn: 'root'
})
export class DataPacienteService {

  //variables
  url: string = 'http://localhost:3000/pacientes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  listaPacientes: PacienteI[] = [];
  

  constructor(private clientHttp: HttpClient) { }

  
  postPaciente(form: PacienteI): Observable<RespondeI> {
    console.log(form);
    return this.clientHttp.post<RespondeI>(this.url, form, this.httpOptions);
  }

  getPacientes(): Observable<PacienteI[]> {
    return this.clientHttp.get<PacienteI[]>(this.url);
  }
  putPacientes(index:number,form:PacienteI):Observable<RespondeI>{
    let url:string;
    url = this.url + index;
    return this.clientHttp.put<RespondeI>(url,form);
  }



}
