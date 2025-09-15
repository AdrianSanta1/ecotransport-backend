// src/domain/entities/RutaFavorita.ts
export interface RutaFavoritaProps {
  id?: number;
  usuarioId: number;
  viajeId: number;
  nombreRuta?: string;
  origen: string;
  destino: string;
  created_at?: Date;
}

export class RutaFavorita {
  public id?: number;
  public usuarioId: number;
  public viajeId: number;
  public nombreRuta?: string;
  public origen: string;
  public destino: string;
  public created_at?: Date;

  constructor(props: RutaFavoritaProps) {
    this.id = props.id;
    this.usuarioId = props.usuarioId;
    this.viajeId = props.viajeId;
    this.nombreRuta = props.nombreRuta;
    this.origen = props.origen;
    this.destino = props.destino;
    this.created_at = props.created_at;
  }
}
