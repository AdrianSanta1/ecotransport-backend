import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";
export declare class RutaFavoritaRepository implements IRutaFavoritaRepository {
    private repo;
    findAll(): Promise<RutaFavorita[]>;
    findByUsuario(usuarioId: number): Promise<RutaFavorita[]>;
    save(ruta: RutaFavorita): Promise<RutaFavorita>;
    update(id: number, data: Partial<RutaFavorita>): Promise<void>;
    delete(id: number): Promise<void>;
    private toDomain;
}
