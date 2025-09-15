import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { UsuarioEntity } from "./UsuarioEntity";

@Entity("comentarios")
export class ComentarioEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "usuario_id" })
  usuarioId!: number;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.comentarios, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario!: UsuarioEntity;

  @Column("text")
  comentario!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
