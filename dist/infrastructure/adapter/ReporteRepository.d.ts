import { IReporteRepository } from "../../domain/interfaces/IReporteRepository";
import { Reporte } from "../../domain/entities/Reporte";
export declare class ReporteRepository implements IReporteRepository {
    private repo;
    save(reporte: Reporte): Promise<Reporte>;
}
