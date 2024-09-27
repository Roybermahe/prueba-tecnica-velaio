import { IPersona } from "./persona.interface";

export interface ITareas {
    nombre: string;
    fecha: Date;
    personas: IPersona[];
    estado: estados;
}

export type estados = 'COMPLETADAS'|'PENDIENTES';