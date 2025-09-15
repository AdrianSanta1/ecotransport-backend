import { viajeRepository } from "../../infrastructure/dependencies";


export const obtenerViajesPorMes = async (
usuarioId: number,
mes: number,
anio: number
) => {
return await viajeRepository.findByMesYUsuario(usuarioId, mes, anio);
};