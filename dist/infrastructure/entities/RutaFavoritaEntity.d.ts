import { UsuarioEntity } from "./UsuarioEntity";
import { ViajeEntity } from "./ViajeEntity";
export declare class RutaFavoritaEntity {
    id: number;
    usuarioId: number;
    viajeId: number;
    nombreRuta: string;
    origen: string;
    destino: string;
    created_at: Date;
    usuario: UsuarioEntity;
    viaje: ViajeEntity;
}
