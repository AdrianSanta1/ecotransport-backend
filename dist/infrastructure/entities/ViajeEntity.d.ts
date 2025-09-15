import { UsuarioEntity } from "./UsuarioEntity";
import { TipoTransporteEntity } from "./TipoTransporteEntity";
export declare class ViajeEntity {
    id: number;
    usuarioId: number;
    tipoTransporteId: number;
    nombreRuta: string;
    origen: string;
    destino: string;
    distanciaKm: number;
    fechaViaje: Date;
    emisionCO2: number;
    createdAt: Date;
    usuario: UsuarioEntity;
    tipoTransporte: TipoTransporteEntity;
}
