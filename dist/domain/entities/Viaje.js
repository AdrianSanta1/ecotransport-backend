"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viaje = void 0;
class Viaje {
    constructor(props) {
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
exports.Viaje = Viaje;
//# sourceMappingURL=Viaje.js.map