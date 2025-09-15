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
exports.UsuarioEntity = void 0;
const typeorm_1 = require("typeorm");
const ViajeEntity_1 = require("./ViajeEntity");
const ReporteEntity_1 = require("./ReporteEntity");
const ComentarioEntity_1 = require("./ComentarioEntity");
let UsuarioEntity = class UsuarioEntity {
};
exports.UsuarioEntity = UsuarioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 150 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 150 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 150 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "user" }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], UsuarioEntity.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], UsuarioEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ViajeEntity_1.ViajeEntity, (viaje) => viaje.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "viajes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ReporteEntity_1.ReporteEntity, (reporte) => reporte.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "reportes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ComentarioEntity_1.ComentarioEntity, (comentario) => comentario.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "comentarios", void 0);
exports.UsuarioEntity = UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)("usuarios")
], UsuarioEntity);
//# sourceMappingURL=UsuarioEntity.js.map