import { Injectable } from "@angular/core";
import { IPersona } from "src/models/persona.interface";
import { Repository } from "./base/repositorio.service";

@Injectable({
    providedIn: 'root'
})
export class PersonaService extends Repository<IPersona> {
    constructor() {
        super('PERSONA');
    }
}