import { IViajeRepository } from "../../domain/interfaces/IViajeRepository";
import { Viaje } from "../../domain/entities/Viaje";
import { ViajeEntity } from "../entities/ViajeEntity";
export declare class ViajeRepository implements IViajeRepository {
    private repo;
    save(viaje: Viaje): Promise<Viaje>;
    update(id: number, data: Partial<ViajeEntity>): Promise<ViajeEntity>;
    delete(id: number): Promise<void>;
    countByUsuario(usuarioId: number): Promise<number>;
    findByUsuario(usuarioId: number): Promise<ViajeEntity[]>;
    findByUsuarioId(usuarioId: number): Promise<ViajeEntity[]>;
    findByMesYUsuario(usuarioId: number, mes: number, anio: number): Promise<Viaje[]>;
}
