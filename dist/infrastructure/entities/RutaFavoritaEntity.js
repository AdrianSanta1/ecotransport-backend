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
exports.RutaFavoritaEntity = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntity_1 = require("./UsuarioEntity");
const ViajeEntity_1 = require("./ViajeEntity");
let RutaFavoritaEntity = class RutaFavoritaEntity {
};
exports.RutaFavoritaEntity = RutaFavoritaEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RutaFavoritaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "usuario_id" }),
    __metadata("design:type", Number)
], RutaFavoritaEntity.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "viaje_id" }),
    __metadata("design:type", Number)
], RutaFavoritaEntity.prototype, "viajeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nombre_ruta", nullable: true }),
    __metadata("design:type", String)
], RutaFavoritaEntity.prototype, "nombreRuta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RutaFavoritaEntity.prototype, "origen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RutaFavoritaEntity.prototype, "destino", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], RutaFavoritaEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntity_1.UsuarioEntity, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", UsuarioEntity_1.UsuarioEntity)
], RutaFavoritaEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ViajeEntity_1.ViajeEntity, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "viaje_id" }),
    __metadata("design:type", ViajeEntity_1.ViajeEntity)
], RutaFavoritaEntity.prototype, "viaje", void 0);
exports.RutaFavoritaEntity = RutaFavoritaEntity = __decorate([
    (0, typeorm_1.Entity)("rutas_favoritas")
], RutaFavoritaEntity);
//# sourceMappingURL=RutaFavoritaEntity.js.map