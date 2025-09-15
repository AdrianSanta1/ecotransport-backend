import { IReporteRepository } from "../../domain/interfaces/IReporteRepository";
import { IViajeRepository } from "../../domain/interfaces/IViajeRepository";
import { Reporte } from "../../domain/entities/Reporte";


interface Input {
usuarioId: number;
mes: number;
anio: number;
}


export class GenerarReporteMensualService {
constructor(
private viajeRepo: IViajeRepository,
private reporteRepo: IReporteRepository
) {}


async execute(input: Input): Promise<Reporte> {
const viajes = await this.viajeRepo.findByMesYUsuario(input.usuarioId, input.mes, input.anio);
if (!viajes || viajes.length === 0) throw new Error("Sin viajes para ese período");


const totalViajes = viajes.length;
const totalDistancia = viajes.reduce((sum, v) => sum + Number(v.distanciaKm), 0);
const totalCO2 = viajes.reduce((sum, v) => sum + Number(v.emisionCO2), 0);


const transporteMasUsado = this.calcularMasUsado(viajes, "tipoTransporte");
const transporteMasContaminante = this.calcularMasUsado(viajes, "emisionCO2");


const reporte = new Reporte({
usuarioId: input.usuarioId,
fechaInicio: new Date(`${input.anio}-${input.mes}-01`),
fechaFin: new Date(`${input.anio}-${input.mes}-31`),
totalViajes,
totalDistancia,
totalCO2,
transporteMasUsado,
transporteMasContaminante,
});


return this.reporteRepo.save(reporte);
}


private calcularMasUsado(viajes: any[], campo: "tipoTransporte" | "emisionCO2") {
const conteo: Record<string, number> = {};
viajes.forEach((v) => {
const key = campo === "tipoTransporte" ? v.tipoTransporte.nombre : v.tipoTransporte.nombre;
conteo[key] = (conteo[key] ?? 0) + (campo === "emisionCO2" ? Number(v.emisionCO2) : 1);
});


return Object.entries(conteo).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}
}