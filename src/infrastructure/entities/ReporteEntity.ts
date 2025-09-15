import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UsuarioEntity } from "./UsuarioEntity";

@Entity("reportes")
export class ReporteEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "usuario_id" })
  usuarioId!: number;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.reportes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario!: UsuarioEntity;

  @Column({ name: "fecha_inicio", type: "date" })
  fechaInicio!: Date;

  @Column({ name: "fecha_fin", type: "date" })
  fechaFin!: Date;

  @Column({ name: "total_viajes", type: "int" })
  totalViajes!: number;

  @Column({ name: "total_distancia", type: "numeric", precision: 12, scale: 3 })
  totalDistancia!: number;

  @Column({ name: "total_co2", type: "numeric", precision: 12, scale: 6 })
  totalCO2!: number;

  @Column({ name: "transporte_mas_usado" })
  transporteMasUsado!: string;

  @Column({ name: "transporte_mas_contaminante" })
  transporteMasContaminante!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
