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
exports.ReporteEntity = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntity_1 = require("./UsuarioEntity");
let ReporteEntity = class ReporteEntity {
};
exports.ReporteEntity = ReporteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReporteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "usuario_id" }),
    __metadata("design:type", Number)
], ReporteEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntity_1.UsuarioEntity, (usuario) => usuario.reportes, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", UsuarioEntity_1.UsuarioEntity)
], ReporteEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_inicio", type: "date" }),
    __metadata("design:type", Date)
], ReporteEntity.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fecha_fin", type: "date" }),
    __metadata("design:type", Date)
], ReporteEntity.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_viajes", type: "int" }),
    __metadata("design:type", Number)
], ReporteEntity.prototype, "totalViajes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_distancia", type: "numeric", precision: 12, scale: 3 }),
    __metadata("design:type", Number)
], ReporteEntity.prototype, "totalDistancia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "total_co2", type: "numeric", precision: 12, scale: 6 }),
    __metadata("design:type", Number)
], ReporteEntity.prototype, "totalCO2", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "transporte_mas_usado" }),
    __metadata("design:type", String)
], ReporteEntity.prototype, "transporteMasUsado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "transporte_mas_contaminante" }),
    __metadata("design:type", String)
], ReporteEntity.prototype, "transporteMasContaminante", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], ReporteEntity.prototype, "createdAt", void 0);
exports.ReporteEntity = ReporteEntity = __decorate([
    (0, typeorm_1.Entity)("reportes")
], ReporteEntity);
//# sourceMappingURL=ReporteEntity.js.map