import { Viaje } from "../entities/Viaje";
export interface IViajeRepository {
    save(viaje: Viaje): Promise<Viaje>;
    countByUsuario(usuarioId: number): Promise<number>;
    findByMesYUsuario(usuarioId: number, mes: number, anio: number): Promise<Viaje[]>;
}
