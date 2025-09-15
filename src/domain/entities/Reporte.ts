export interface ReporteProps {
  usuarioId: number;
  fechaInicio: Date;
  fechaFin: Date;
  totalViajes: number;
  totalDistancia: number;
  totalCO2: number;
  transporteMasUsado: string;
  transporteMasContaminante: string;
  id?: number;
  created_at?: Date;
}

export class Reporte {
  public usuarioId: number;
  public fechaInicio: Date;
  public fechaFin: Date;
  public totalViajes: number;
  public totalDistancia: number;
  public totalCO2: number;
  public transporteMasUsado: string;
  public transporteMasContaminante: string;
  public id?: number;
  public created_at?: Date;

  constructor(props: ReporteProps) {
    this.usuarioId = props.usuarioId;
    this.fechaInicio = props.fechaInicio;
    this.fechaFin = props.fechaFin;
    this.totalViajes = props.totalViajes;
    this.totalDistancia = props.totalDistancia;
    this.totalCO2 = props.totalCO2;
    this.transporteMasUsado = props.transporteMasUsado;
    this.transporteMasContaminante = props.transporteMasContaminante;
    this.id = props.id;
    this.created_at = props.created_at;
  }
}
