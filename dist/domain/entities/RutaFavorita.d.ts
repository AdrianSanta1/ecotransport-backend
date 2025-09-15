export interface RutaFavoritaProps {
    id?: number;
    usuarioId: number;
    viajeId: number;
    nombreRuta?: string;
    origen: string;
    destino: string;
    created_at?: Date;
}
export declare class RutaFavorita {
    id?: number;
    usuarioId: number;
    viajeId: number;
    nombreRuta?: string;
    origen: string;
    destino: string;
    created_at?: Date;
    constructor(props: RutaFavoritaProps);
}
