export interface ComentarioProps {
  usuarioId: number;
  comentario: string;
  id?: number;
  createdAt?: Date;
}

export class Comentario {
  public usuarioId: number;
  public comentario: string;
  public id?: number;
  public createdAt?: Date;

  constructor(props: ComentarioProps) {
    this.usuarioId = props.usuarioId;
    this.comentario = props.comentario;
    this.id = props.id;
    this.createdAt = props.createdAt;
  }
}

