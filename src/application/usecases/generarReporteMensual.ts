import { viajeRepository } from "../../infrastructure/dependencies";
import { Reporte } from "../../domain/entities/Reporte";

export const generarReporteMensual = async (
  usuarioId: number,
  mes: number,
  anio: number
) => {
  const inicio = new Date(anio, mes - 1, 1);
  const fin = new Date(anio, mes, 0);
  const viajes = await viajeRepository.findByMesYUsuario(usuarioId, mes, anio);

  const totalCO2 = viajes.reduce((acc, v) => acc + Number(v.emisionCO2), 0);
  const totalDistancia = viajes.reduce((acc, v) => acc + Number(v.distanciaKm), 0);
  const totalViajes = viajes.length;

  // Calcular transporte más usado
  const conteoTransporte: Record<string, number> = {};
  const emisionTransporte: Record<string, number> = {};

  for (const viaje of viajes) {
  if (viaje.tipoTransporte && viaje.tipoTransporte.nombre) {
    const nombre = viaje.tipoTransporte.nombre;

    conteoTransporte[nombre] = (conteoTransporte[nombre] || 0) + 1;
    emisionTransporte[nombre] = (emisionTransporte[nombre] || 0) + Number(viaje.emisionCO2);
  }
}


  const transporteMasUsado = Object.entries(conteoTransporte).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
  const transporteMasContaminante = Object.entries(emisionTransporte).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  return new Reporte({
    usuarioId,
    fechaInicio: inicio,
    fechaFin: fin,
    totalViajes,
    totalDistancia,
    totalCO2,
    transporteMasUsado,
    transporteMasContaminante,
  });
};
