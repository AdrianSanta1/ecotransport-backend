
import { rutaFavoritaRepository } from "../../infrastructure/dependencies";
import { RutaFavorita } from "../../domain/entities/RutaFavorita";

export const crearRutaFavorita = async (data: any) => {
  const ruta = new RutaFavorita(data);
  return await rutaFavoritaRepository.save(ruta);
};
