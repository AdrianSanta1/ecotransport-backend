
import { ITipoTransporteRepository } from "../../domain/interfaces/ITipoTransporteRepository";
import { TipoTransporte, TransportName } from "../../domain/entities/TipoTransporte";
import { AppDataSource } from "../../infrastructure/typeorm/data-source";
import { TipoTransporteEntity } from "../entities/TipoTransporteEntity";

// --- Tipos compatibles con tu dominio ---
type TipoTransportePropsLike = {
  id: number;
  nombre: TransportName;
  factor_emision_co2: number;
};

// --- Helpers para validar ---
const allowed = new Set<TransportName>(["car", "bus", "bicycle", "walk"]);
const normalizeNombre = (s: string) => s.toLowerCase().trim();

function toDomainProps(e: TipoTransporteEntity): TipoTransportePropsLike {
  const n = normalizeNombre(e.nombre) as TransportName;
  if (!allowed.has(n)) {
    throw new Error(`TipoTransporte.nombre inválido: ${e.nombre}`);
  }
  return {
    id: e.id,
    nombre: n,
    factor_emision_co2: Number(e.factor_emision_co2),
  };
}

export class TipoTransporteRepository implements ITipoTransporteRepository {
  private repo = AppDataSource.getRepository(TipoTransporteEntity);

  async findAll(): Promise<TipoTransporte[]> {
    const results = await this.repo.find();
    return results.map((r) => new TipoTransporte(toDomainProps(r)));
  }

  async findById(id: number): Promise<TipoTransporte | null> {
    const result = await this.repo.findOneBy({ id });
    return result ? new TipoTransporte(toDomainProps(result)) : null;
  }

  async getFactorEmision(id: number): Promise<number> {
    const t = await this.repo.findOneBy({ id });
    if (!t) throw new Error("Tipo transporte no encontrado");
    return Number(t.factor_emision_co2);
  }

  async save(transporte: TipoTransporte): Promise<TipoTransporte> {
    const dto: Partial<TipoTransporteEntity> = {
      id: transporte.id,
      nombre: transporte.nombre,
      factor_emision_co2: Number(transporte.factor_emision_co2),
    };

    const saved = await this.repo.save(dto);
    return new TipoTransporte(toDomainProps(saved as TipoTransporteEntity));
  }

  async update(id: number, data: Partial<TipoTransporte>): Promise<void> {
    const patch: Partial<TipoTransporteEntity> = {};
    if (data.nombre !== undefined) {
      patch.nombre = data.nombre;
    }
    if (data.factor_emision_co2 !== undefined) {
      patch.factor_emision_co2 = Number(data.factor_emision_co2);
    }
    await this.repo.update(id, patch);
  }

  async delete(id: number): Promise<void> {
    // Borrado lógico: seteamos factor en 0
    await this.repo.update(id, { factor_emision_co2: 0 });
  }
}
