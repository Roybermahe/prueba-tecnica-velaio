import { Injectable } from "@angular/core";
import { ITareas } from "src/models/tareas.interface";
import { Repository } from "./base/repositorio.service";

@Injectable({
    providedIn: 'root'
})
export class TareaService extends Repository<ITareas> {
    constructor() {
        super('TAREAS');
    }

    checkNombreTarea(nombre: string) {
      return this.$list.getValue().some(i => i.nombre.toLowerCase() === nombre.toLowerCase() && i.estado === 'PENDIENTE')
    }

}
