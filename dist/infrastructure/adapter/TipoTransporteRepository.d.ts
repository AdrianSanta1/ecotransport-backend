import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";
import { TipoTransporte } from "../../domain/entities/TipoTransporte";
export declare class TipoTransporteRepository implements ITipoTransporteRepository {
    private repo;
    findAll(): Promise<TipoTransporte[]>;
    findById(id: number): Promise<TipoTransporte | null>;
    getFactorEmision(id: number): Promise<number>;
    save(transporte: TipoTransporte): Promise<TipoTransporte>;
    update(id: number, data: Partial<TipoTransporte>): Promise<void>;
    delete(id: number): Promise<void>;
}
