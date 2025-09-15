
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { UsuarioEntity } from "./UsuarioEntity";
import { TipoTransporteEntity } from "./TipoTransporteEntity";

@Entity("viajes")
export class ViajeEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "usuario_id" })
  usuarioId!: number;

  @Column({ name: "tipo_transporte_id" })
  tipoTransporteId!: number;

  @Column({ name: "nombre_ruta", nullable: true })
  nombreRuta!: string;

  @Column()
  origen!: string;

  @Column()
  destino!: string;

  @Column({ name: "distancia_km", type: "numeric", precision: 8, scale: 3 })
  distanciaKm!: number;

  @Column({ name: "fecha_viaje", type: "date" })
  fechaViaje!: Date;

  @Column({ name: "emision_co2", type: "numeric", precision: 10, scale: 6 })
  emisionCO2!: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @ManyToOne(() => UsuarioEntity, usuario => usuario.viajes, { onDelete: "CASCADE" })
  @JoinColumn({ name: "usuario_id" })
  usuario!: UsuarioEntity;

  @ManyToOne(() => TipoTransporteEntity, tipo => tipo.viajes, { onDelete: "CASCADE" })
  @JoinColumn({ name: "tipo_transporte_id" })
  tipoTransporte!: TipoTransporteEntity;
}
