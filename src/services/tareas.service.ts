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
}