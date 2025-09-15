import { IViajeRepository } from "../../domain/interfaces/IViajeRepository";
import { Viaje } from "../../domain/entities/Viaje";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { ViajeEntity } from "../entities/ViajeEntity";
import { Between } from "typeorm";

export class ViajeRepository implements IViajeRepository {
  private repo = AppDataSource.getRepository(ViajeEntity);

  async save(viaje: Viaje): Promise<Viaje> {
    const entity = this.repo.create({
      id: viaje.id,
      usuarioId: viaje.usuarioId,
      tipoTransporteId: viaje.tipoTransporteId,
      nombreRuta: viaje.nombreRuta,
      origen: viaje.origen,
      destino: viaje.destino,
      distanciaKm: viaje.distanciaKm,
      fechaViaje: viaje.fechaViaje,
      emisionCO2: viaje.emisionCO2,
      createdAt: viaje.createdAt,
    });
    const saved = await this.repo.save(entity);
    return new Viaje({
      ...saved,
      tipoTransporte: saved.tipoTransporte ? { nombre: saved.tipoTransporte.nombre } : undefined
    });
  }

async update(id: number, data: Partial<ViajeEntity>): Promise<ViajeEntity> {
  const repo = AppDataSource.getRepository(ViajeEntity);
  await repo.update(id, data);
  return await repo.findOneByOrFail({ id });
}

async delete(id: number): Promise<void> {
  await AppDataSource.getRepository(ViajeEntity).delete(id);
}


  async countByUsuario(usuarioId: number): Promise<number> {
    return this.repo.count({ where: { usuarioId } });
  }

  async findByUsuario(usuarioId: number) {
  const repo = AppDataSource.getRepository(ViajeEntity);
  return await repo.find({
    where: { usuario: { id: usuarioId } },
    relations: ["tipoTransporte"],
    order: { fechaViaje: "DESC" }
  });
}
async findByUsuarioId(usuarioId: number) {
  return this.repo.find({
    where: { usuario: { id: usuarioId } },
    relations: ["tipoTransporte"], // 👈 esto asegura que traiga datos del transporte
  });
}


  async findByMesYUsuario(usuarioId: number, mes: number, anio: number): Promise<Viaje[]> {
    const inicio = new Date(anio, mes - 1, 1);
    const fin = new Date(anio, mes, 0);

    const results = await this.repo.find({
      where: {
        usuarioId,
        fechaViaje: Between(inicio, fin),
      },
      relations: ["tipoTransporte"],
    });

    return results.map((v) =>
      new Viaje({
        id: v.id,
        usuarioId: v.usuarioId,
        tipoTransporteId: v.tipoTransporteId,
        nombreRuta: v.nombreRuta,
        origen: v.origen,
        destino: v.destino,
        distanciaKm: v.distanciaKm,
        fechaViaje: v.fechaViaje,
        emisionCO2: v.emisionCO2,
        createdAt: v.createdAt,
        tipoTransporte: v.tipoTransporte ? { nombre: v.tipoTransporte.nombre } : undefined,
      })
    );
  }
}
