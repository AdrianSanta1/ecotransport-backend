import { Reporte } from "../entities/Reporte";


export interface IReporteRepository {
save(reporte: Reporte): Promise<Reporte>;
}