import { Injectable } from "@angular/core";
import { PacienteI } from "../interface/paciente-i";
import { DataPacienteService } from "./dataPaciente.service";

@Injectable({
    providedIn: 'root'
  })
export class PacienteService{

    listaPaciente:PacienteI[] = [];

    constructor(private dataPacienteService:DataPacienteService){  }

    allPaciente(){
        return this.dataPacienteService.getPacientes();
    }
    addPaciente(form:PacienteI){
        this.listaPaciente.push(form);
        this.dataPacienteService.postPaciente(form).subscribe(
            response => console.log(response),
            error => console.log(error)            
        );;
    }
    updatepacientes(index:number,form:PacienteI){
        let paciente = this.listaPaciente[index];
        paciente.nombre = form.nombre;
        paciente.apellido = form.apellido;
        paciente.cedula = form.cedula;
        paciente.telefono = form.telefono;
        paciente.correo = form.correo;
        paciente.estado = form.estado;
        this.dataPacienteService.putPacientes(index,paciente);
    }

    setPacientes(pacientes: PacienteI[]){
        this.listaPaciente = pacientes;
    }
}

