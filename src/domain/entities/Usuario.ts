

export interface UsuarioProps {
  id?: number;
  nombre: string;
  apellido: string;
  email: string;
  password_hash: string;
  created_at?: Date;
}

export class Usuario {
  public id?: number;
  public nombre: string;
  public apellido: string;
  public email: string;
  public password_hash: string;
  public created_at?: Date;

  constructor(props: UsuarioProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.apellido = props.apellido;
    this.email = props.email;
    this.password_hash = props.password_hash;
    this.created_at = props.created_at;
  }
}

