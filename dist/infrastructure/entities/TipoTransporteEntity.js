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
exports.TipoTransporteEntity = void 0;
const typeorm_1 = require("typeorm");
const ViajeEntity_1 = require("./ViajeEntity");
let TipoTransporteEntity = class TipoTransporteEntity {
};
exports.TipoTransporteEntity = TipoTransporteEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoTransporteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50 }),
    __metadata("design:type", String)
], TipoTransporteEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "factor_emision_co2", type: "numeric", precision: 10, scale: 6 }),
    __metadata("design:type", Object)
], TipoTransporteEntity.prototype, "factor_emision_co2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ViajeEntity_1.ViajeEntity, (viaje) => viaje.tipoTransporte),
    __metadata("design:type", Array)
], TipoTransporteEntity.prototype, "viajes", void 0);
exports.TipoTransporteEntity = TipoTransporteEntity = __decorate([
    (0, typeorm_1.Entity)("tipos_transporte")
], TipoTransporteEntity);
//# sourceMappingURL=TipoTransporteEntity.js.map