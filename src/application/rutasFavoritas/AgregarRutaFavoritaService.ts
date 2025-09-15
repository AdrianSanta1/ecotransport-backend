import { IRutaFavoritaRepository } from "../../domain/interfaces/IRutaFavoritaRepository";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";

interface AgregarRutaFavoritaDTO {
  usuarioId: number;
  viajeId: number;
  nombreRuta?: string;
  origen: string;
  destino: string;
}

export class AgregarRutaFavoritaService {
  constructor(private readonly repo: IRutaFavoritaRepository) {}

  async execute(data: AgregarRutaFavoritaDTO): Promise<RutaFavorita> {
    if (!data.usuarioId || !data.viajeId) {
      throw new Error("usuarioId y viajeId son obligatorios");
    }

    const ruta = new RutaFavorita({
      usuarioId: data.usuarioId,
      viajeId: data.viajeId,
      nombreRuta: data.nombreRuta,
      origen: data.origen,
      destino: data.destino,
    });

    return this.repo.save(ruta);
  }
}
