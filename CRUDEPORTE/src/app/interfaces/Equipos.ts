export interface IEquipos {
    sum: number;
    equipos: Iequipo[];
}

export interface Iequipo {
    _id?: string;
    nombre: string;
    descripcion: string;
    serie: string;
}
