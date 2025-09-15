import { IUsuarioRepository } from "../../domain/interfaces/IUsuarioRepository";


export class ObtenerPerfilUsuarioService {
constructor(private usuarioRepo: IUsuarioRepository) {}


async execute(usuarioId: number) {
const usuario = await this.usuarioRepo.findById(usuarioId);
if (!usuario) throw new Error("Usuario no encontrado");


const totalViajes = await this.usuarioRepo.countViajes(usuarioId);


return {
id: usuario.id,
nombre: usuario.nombre,
apellido: usuario.apellido,
email: usuario.email,
totalViajes,
};
}
}