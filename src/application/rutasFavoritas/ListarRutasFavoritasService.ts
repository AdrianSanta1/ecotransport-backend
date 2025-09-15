import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";

export class ListarRutasFavoritasService {
  constructor(private readonly repo: IRutaFavoritaRepository) {}

  async execute(usuarioId: number): Promise<RutaFavorita[]> {
    if (!usuarioId) {
      throw new Error("usuarioId es obligatorio");
    }

    return this.repo.findByUsuario(usuarioId);
  }
}
