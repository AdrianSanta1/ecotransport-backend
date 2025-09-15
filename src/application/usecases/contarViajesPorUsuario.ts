import { viajeRepository } from "../../infrastructure/dependencies";


export const contarViajesPorUsuario = async (usuarioId: number) => {
return await viajeRepository.countByUsuario(usuarioId);
};

