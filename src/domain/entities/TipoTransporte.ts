// Valores válidos en toda la app/BD
export type TransportName = 'car' | 'bus' | 'bicycle' | 'walk';

export interface TipoTransporteProps {
  id?: number;
  nombre: TransportName;
  // mantenemos snake_case en dominio para alinear con el backend actual
  factor_emision_co2: number;
}

export class TipoTransporte {
  public id?: number;
  public nombre: TransportName;
  public factor_emision_co2: number;

  constructor(props: TipoTransporteProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.factor_emision_co2 = props.factor_emision_co2;
  }

  // (opcional) normalizador por si recibes sinónimos desde algún lado antiguo
  static normalizeNombre(n: string): TransportName {
    const m = n.trim().toLowerCase();
    if (m === 'car' || m === 'bus' || m === 'bicycle' || m === 'walk') return m;
    if (m === 'carro') return 'car';
    if (m === 'bicicleta') return 'bicycle';
    if (m === 'a_pie' || m === 'apie' || m === 'a pie') return 'walk';
    // por defecto, fuerza a 'car' o lanza error si prefieres
    return 'car';
  }
}
