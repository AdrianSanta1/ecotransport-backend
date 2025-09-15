
import { rutaFavoritaRepository } from "../../infrastructure/dependencies";

export const listarRutasFavoritas = async () => {
  return await rutaFavoritaRepository.findAll();
};
