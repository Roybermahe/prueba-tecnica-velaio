import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ITareas} from "../../../models/tareas.interface";
import {TareaService} from "../../../services/tareas.service";

@Component({
  selector: 'app-card-tarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-tarea.component.html',
  styleUrls: ['./card-tarea.component.css']
})
export class CardTareaComponent {

  @Input() tarea!: ITareas;
  @Input() index!: number;

  constructor(
    private tareaService: TareaService,
  ) {

  }
  completarTarea($event: any) {
    if($event.target.checked) {
      this.tareaService.actualizar(this.index, { ...this.tarea, estado: 'COMPLETADO' });
    }
  }

  borrarTarea() {
    this.tareaService.borrar(this.index);
  }
}
