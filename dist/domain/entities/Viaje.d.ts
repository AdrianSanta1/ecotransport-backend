export interface ViajeProps {
    id?: number;
    usuarioId: number;
    tipoTransporteId: number;
    nombreRuta?: string;
    origen: string;
    destino: string;
    distanciaKm: number;
    fechaViaje: Date;
    emisionCO2: number;
    createdAt?: Date;
    tipoTransporte?: {
        nombre: string;
    };
}
export declare class Viaje {
    id?: number;
    usuarioId: number;
    tipoTransporteId: number;
    nombreRuta?: string;
    origen: string;
    destino: string;
    distanciaKm: number;
    fechaViaje: Date;
    emisionCO2: number;
    createdAt?: Date;
    tipoTransporte?: {
        nombre: string;
    };
    constructor(props: ViajeProps);
}
