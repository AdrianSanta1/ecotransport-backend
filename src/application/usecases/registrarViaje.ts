import { viajeRepository } from "../../infrastructure/dependencies";
import { Viaje } from "../../domain/entities/Viaje";


export const registrarViaje = async (data: any) => {
const viaje = new Viaje(data);
return await viajeRepository.save(viaje);
};