import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ViajeEntity } from "./ViajeEntity";
import { ReporteEntity } from "./ReporteEntity";
import { ComentarioEntity } from "./ComentarioEntity";

@Entity("usuarios")
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true, length: 150 })
  nombre!: string;

  @Column({ nullable: true, length: 150 })
apellido!: string;

  @Column({ unique: true, length: 150 })
  email!: string;

  @Column({ select: false })
  password_hash!: string;

  @Column({ default: "user" })
  rol!: "admin" | "user";

  @Column({ default: true })
activo!: boolean;


  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => ViajeEntity, (viaje) => viaje.usuario)
  viajes!: ViajeEntity[];

  @OneToMany(() => ReporteEntity, (reporte) => reporte.usuario)
reportes!: ReporteEntity[];

@OneToMany(() => ComentarioEntity, (comentario) => comentario.usuario)
comentarios!: ComentarioEntity[];

}


