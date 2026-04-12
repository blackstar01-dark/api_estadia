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
exports.CreateMantenimientoDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class CreateMantenimientoDto {
    registroId;
    programaId;
    tipo;
    actividad;
    observaciones;
}
exports.CreateMantenimientoDto = CreateMantenimientoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El registro de bitácora es obligatorio' }),
    (0, class_validator_1.IsInt)({ message: 'El registroId debe ser un número' }),
    __metadata("design:type", Number)
], CreateMantenimientoDto.prototype, "registroId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'El programaId debe ser un número' }),
    __metadata("design:type", Number)
], CreateMantenimientoDto.prototype, "programaId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El tipo de mantenimiento es obligatorio' }),
    (0, class_validator_1.IsEnum)(enums_1.TipoMantenimiento, {
        message: 'El tipo debe ser PREVENTIVO o CORRECTIVO',
    }),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La actividad de mantenimiento es obligatoria' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'La actividad debe tener entre 5 y 255 caracteres',
    }),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "actividad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 500, {
        message: 'Las observaciones deben tener entre 3 y 500 caracteres',
    }),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "observaciones", void 0);
//# sourceMappingURL=create-mantenimiento.dto.js.map