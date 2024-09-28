import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TareaService} from "../../../../services/tareas.service";
import {estados, ITareas} from "../../../../models/tareas.interface";
import {CardTareaComponent} from "../../../components/card-tarea/card-tarea.component";

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, CardTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  estadoActual: estados = 'PENDIENTE';
  lista = signal([] as ITareas[])
  constructor(
    private tareaService: TareaService,
  ) {
    this.tareaService.list.subscribe(resp => {
      this.lista.set(resp);
    })
  }

  existenTareas(estado:string|estados = '') {
    return estado == '' ? this.lista().length > 0 : this.lista().some(i => i.estado === estado );
  }
}
