export interface IPersona {
    nombre: string;
    edad: number;
    habilidades: IHabilidades[];
}

export interface IHabilidades {
    habilidad: string;
}