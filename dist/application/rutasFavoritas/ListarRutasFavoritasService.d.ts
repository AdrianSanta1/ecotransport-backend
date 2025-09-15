import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";
export declare class ListarRutasFavoritasService {
    private readonly repo;
    constructor(repo: IRutaFavoritaRepository);
    execute(usuarioId: number): Promise<RutaFavorita[]>;
}
