
import { usuarioRepository } from "../../infrastructure/dependencies";

export const listarUsuarios = async () => {
  return await usuarioRepository.findAll();
};
