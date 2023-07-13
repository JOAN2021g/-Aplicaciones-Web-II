export interface Ipartidos {
    sum:number;
    partidos: Ipartido[];
}
export interface Ipartido {
    _id?: string;
    ID_Torneo:string;
    ID_Equipo_1:string;
    ID_Equipo_2:string;
    Goles_equipo_1:string;
    Goles_equipo_2:string;
    Observacion:string;
}
