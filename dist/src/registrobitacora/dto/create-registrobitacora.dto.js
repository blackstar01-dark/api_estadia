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
exports.CreateRegistroBitacoraDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const client_1 = require("../../../generated/prisma/client");
class CreateRegistroBitacoraDto {
    descripcion;
    periodicidad;
    firmaHashRegistro;
    bitacoraId;
    estacionId;
    programaId;
    tipoMantenimiento;
    observaciones;
    numeroPipa;
    producto;
    volumenRecibido;
    proveedor;
}
exports.CreateRegistroBitacoraDto = CreateRegistroBitacoraDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser texto' }),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PeriodicidadBitacora, {
        message: 'La periodicidad no es válida',
    }),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "periodicidad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La firma del responsable es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La firma debe ser texto' }),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "firmaHashRegistro", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'El ID de la bitácora debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'bitacoraId debe ser mayor a 0' }),
    __metadata("design:type", Number)
], CreateRegistroBitacoraDto.prototype, "bitacoraId", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'El ID de la estación debe ser un número entero' }),
    (0, class_validator_1.Min)(1, { message: 'estacionId debe ser mayor a 0' }),
    __metadata("design:type", Number)
], CreateRegistroBitacoraDto.prototype, "estacionId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateRegistroBitacoraDto.prototype, "programaId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.TipoMantenimiento),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "tipoMantenimiento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "observaciones", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "numeroPipa", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "producto", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRegistroBitacoraDto.prototype, "volumenRecibido", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRegistroBitacoraDto.prototype, "proveedor", void 0);
//# sourceMappingURL=create-registrobitacora.dto.js.map