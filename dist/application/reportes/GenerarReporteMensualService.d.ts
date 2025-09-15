import { IReporteRepository } from "../../domain/interfaces/IReporteRepository";
import { IViajeRepository } from "../../domain/interfaces/IViajeRepository";
import { Reporte } from "../../domain/entities/Reporte";
interface Input {
    usuarioId: number;
    mes: number;
    anio: number;
}
export declare class GenerarReporteMensualService {
    private viajeRepo;
    private reporteRepo;
    constructor(viajeRepo: IViajeRepository, reporteRepo: IReporteRepository);
    execute(input: Input): Promise<Reporte>;
    private calcularMasUsado;
}
export {};
