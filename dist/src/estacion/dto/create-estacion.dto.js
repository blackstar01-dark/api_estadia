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
exports.CreateEstacionDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEstacionDto {
    nombre;
    razonSocial;
    rfc;
    permisoCRE;
    direccion;
    representante;
    telefono;
}
exports.CreateEstacionDto = CreateEstacionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre de la estación es obligatorio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La razón social es obligatoria' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 150),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "razonSocial", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El RFC es obligatorio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/, { message: 'RFC inválido' }),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "rfc", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El permiso CRE es obligatorio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^CRE-\d{5}-\d{4}$/, {
        message: 'El permiso CRE debe tener el formato CRE-12345-2026',
    }),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "permisoCRE", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La dirección es obligatoria' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 255),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El representante es obligatorio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "representante", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEstacionDto.prototype, "telefono", void 0);
//# sourceMappingURL=create-estacion.dto.js.map