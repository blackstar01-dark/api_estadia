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
exports.CreateProgramaMantenimientoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProgramaMantenimientoDto {
    estacionId;
    plantillaId;
    activo;
    fechaInicio;
}
exports.CreateProgramaMantenimientoDto = CreateProgramaMantenimientoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La estación es obligatoria' }),
    (0, class_validator_1.IsInt)({ message: 'El id de la estación debe ser un número' }),
    __metadata("design:type", Number)
], CreateProgramaMantenimientoDto.prototype, "estacionId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La plantilla es obligatoria' }),
    (0, class_validator_1.IsInt)({ message: 'El id de la plantilla debe ser un número' }),
    __metadata("design:type", Number)
], CreateProgramaMantenimientoDto.prototype, "plantillaId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Activo debe ser verdadero o falso' }),
    __metadata("design:type", Boolean)
], CreateProgramaMantenimientoDto.prototype, "activo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha debe ser una fecha válida' }),
    __metadata("design:type", String)
], CreateProgramaMantenimientoDto.prototype, "fechaInicio", void 0);
//# sourceMappingURL=create-programa-mantenimiento.dto.js.map