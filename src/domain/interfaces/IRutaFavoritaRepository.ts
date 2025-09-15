
import { RutaFavorita } from "../entities/RutaFavorita";

export interface IRutaFavoritaRepository {
  findAll(): Promise<RutaFavorita[]>;
  findByUsuario(usuarioId: number): Promise<RutaFavorita[]>;
  save(ruta: RutaFavorita): Promise<RutaFavorita>;
  update(id: number, data: Partial<RutaFavorita>): Promise<void>;
  delete(id: number): Promise<void>;
}

