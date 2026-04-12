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
exports.CreatePlantillaMantenimientoDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../generated/prisma/enums");
class CreatePlantillaMantenimientoDto {
    numeralNom;
    actividad;
    periodicidad;
    activa;
}
exports.CreatePlantillaMantenimientoDto = CreatePlantillaMantenimientoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El numeral de la NOM es obligatorio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20, {
        message: 'El numeral debe tener entre 1 y 20 caracteres',
    }),
    __metadata("design:type", String)
], CreatePlantillaMantenimientoDto.prototype, "numeralNom", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La actividad de mantenimiento es obligatoria' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 255, {
        message: 'La actividad debe tener entre 5 y 255 caracteres',
    }),
    __metadata("design:type", String)
], CreatePlantillaMantenimientoDto.prototype, "actividad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La periodicidad es obligatoria' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePlantillaMantenimientoDto.prototype, "periodicidad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreatePlantillaMantenimientoDto.prototype, "activa", void 0);
//# sourceMappingURL=create-plantilla-mantenimiento.dto.js.map