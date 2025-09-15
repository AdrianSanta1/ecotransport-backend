
import { usuarioRepository } from "../../infrastructure/dependencies";
import { Usuario } from "../../domain/entities/Usuario";

export const crearUsuario = async (data: any) => {
  const usuario = new Usuario(data);
  return await usuarioRepository.save(usuario);
};
