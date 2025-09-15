import { TipoTransporte } from "../entities/TipoTransporte";
export interface ITipoTransporteRepository {
    findById(id: number): Promise<TipoTransporte | null>;
    findAll(): Promise<TipoTransporte[]>;
    getFactorEmision(id: number): Promise<number>;
    save(transporte: TipoTransporte): Promise<TipoTransporte>;
    update(id: number, data: Partial<TipoTransporte>): Promise<void>;
    delete(id: number): Promise<void>;
}
