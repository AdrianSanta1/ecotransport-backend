import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";
interface AgregarRutaFavoritaDTO {
    usuarioId: number;
    viajeId: number;
    nombreRuta?: string;
    origen: string;
    destino: string;
}
export declare class AgregarRutaFavoritaService {
    private readonly repo;
    constructor(repo: IRutaFavoritaRepository);
    execute(data: AgregarRutaFavoritaDTO): Promise<RutaFavorita>;
}
export {};
