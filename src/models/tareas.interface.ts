export interface ITareas {
  nombre: string;
  fecha: Date;
  personas: IPersona[];
  estado: estados;
}

export interface IPersona {
  nombre: string;
  edad: number;
  habilidades: IHabilidades[];
}

export interface IHabilidades {
  nombre: string;
}

export type estados = 'COMPLETADO'|'PENDIENTE';
