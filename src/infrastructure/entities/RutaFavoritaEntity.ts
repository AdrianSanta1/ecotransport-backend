import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { UsuarioEntity } from "./UsuarioEntity";
import { ViajeEntity } from "./ViajeEntity";

@Entity("rutas_favoritas")
export class RutaFavoritaEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "usuario_id" })
  usuarioId!: number;

  @Column({ name: "viaje_id" })
  viajeId!: number;

  @Column({ name: "nombre_ruta", nullable: true })
  nombreRuta!: string;

  @Column()
  origen!: string;

  @Column()
  destino!: string;

  @CreateDateColumn({ name: "created_at" })
  created_at!: Date;

  @ManyToOne(() => UsuarioEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "usuario_id" })
  usuario!: UsuarioEntity;

  @ManyToOne(() => ViajeEntity, { onDelete: "CASCADE" })
  @JoinColumn({ name: "viaje_id" })
  viaje!: ViajeEntity;
}
