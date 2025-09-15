import { IReporteRepository } from "../../domain/interfaces/IReporteRepository";
import { Reporte } from "../../domain/entities/Reporte";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { ReporteEntity } from "../entities/ReporteEntity";


export class ReporteRepository implements IReporteRepository {
private repo = AppDataSource.getRepository(ReporteEntity);


async save(reporte: Reporte): Promise<Reporte> {
const entity = this.repo.create(reporte);
const saved = await this.repo.save(entity);
return new Reporte(saved);
}
}