"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViajeEntity = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntity_1 = require("./UsuarioEntity");
const TipoTransporteEntity_1 = require("./TipoTransporteEntity");
let ViajeEntity = class ViajeEntity {
};
exports.ViajeEntity = ViajeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "usuario_id" }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo_transporte_id" }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "tipoTransporteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_ruta", nullable: true }),
    __metadata("design:type", String)
], ViajeEntity.prototype, "nombreRuta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "origen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ViajeEntity.prototype, "destino", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "distancia_km", type: "numeric", precision: 8, scale: 3 }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "distanciaKm", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_viaje", type: "date" }),
    __metadata("design:type", Date)
], ViajeEntity.prototype, "fechaViaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "emision_co2", type: "numeric", precision: 10, scale: 6 }),
    __metadata("design:type", Number)
], ViajeEntity.prototype, "emisionCO2", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], ViajeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntity_1.UsuarioEntity, usuario => usuario.viajes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", UsuarioEntity_1.UsuarioEntity)
], ViajeEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TipoTransporteEntity_1.TipoTransporteEntity, tipo => tipo.viajes, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "tipo_transporte_id" }),
    __metadata("design:type", TipoTransporteEntity_1.TipoTransporteEntity)
], ViajeEntity.prototype, "tipoTransporte", void 0);
exports.ViajeEntity = ViajeEntity = __decorate([
    (0, typeorm_1.Entity)("viajes")
], ViajeEntity);
//# sourceMappingURL=ViajeEntity.js.map