export interface ViajeProps {
  id?: number;
  usuarioId: number;
  tipoTransporteId: number;
  nombreRuta?: string;
  origen: string;
  destino: string;
  distanciaKm: number;
  fechaViaje: Date;
  emisionCO2: number;
  createdAt?: Date;
  tipoTransporte?: { nombre: string };
}

export class Viaje {
  public id?: number;
  public usuarioId: number;
  public tipoTransporteId: number;
  public nombreRuta?: string;
  public origen: string;
  public destino: string;
  public distanciaKm: number;
  public fechaViaje: Date;
  public emisionCO2: number;
  public createdAt?: Date;
  public tipoTransporte?: { nombre: string };

  constructor(props: ViajeProps) {
    this.id = props.id;
    this.usuarioId = props.usuarioId;
    this.tipoTransporteId = props.tipoTransporteId;
    this.nombreRuta = props.nombreRuta;
    this.origen = props.origen;
    this.destino = props.destino;
    this.distanciaKm = props.distanciaKm;
    this.fechaViaje = props.fechaViaje;
    this.emisionCO2 = props.emisionCO2;
    this.createdAt = props.createdAt;
    this.tipoTransporte = props.tipoTransporte;
  }
}
