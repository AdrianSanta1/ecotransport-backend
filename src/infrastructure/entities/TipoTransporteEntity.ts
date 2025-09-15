import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ViajeEntity } from "./ViajeEntity";

@Entity("tipos_transporte")
export class TipoTransporteEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  // Si quieres alinear con el dominio y validar, puedes convertirlo a enum.
  @Column({ type: "varchar", length: 50 })
  nombre!: string;

  @Column({ name: "factor_emision_co2", type: "numeric", precision: 10, scale: 6 })
  factor_emision_co2!: string | number;

  // 👇 Añadir lado inverso de la relación con ViajeEntity
  @OneToMany(() => ViajeEntity, (viaje) => viaje.tipoTransporte)
  viajes!: ViajeEntity[];
}

