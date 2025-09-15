"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporte = void 0;
class Reporte {
    constructor(props) {
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
exports.Reporte = Reporte;
//# sourceMappingURL=Reporte.js.map