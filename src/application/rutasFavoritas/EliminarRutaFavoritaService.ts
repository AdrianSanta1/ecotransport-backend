import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";

export class EliminarRutaFavoritaService {
  constructor(private readonly repo: IRutaFavoritaRepository) {}

  async execute(id: number): Promise<void> {
    if (!id) {
      throw new Error("id es obligatorio");
    }

    await this.repo.delete(id);
  }
}
