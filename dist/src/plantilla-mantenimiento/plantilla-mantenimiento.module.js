"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillaMantenimientoModule = void 0;
const common_1 = require("@nestjs/common");
const plantilla_mantenimiento_service_1 = require("./plantilla-mantenimiento.service");
const plantilla_mantenimiento_controller_1 = require("./plantilla-mantenimiento.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let PlantillaMantenimientoModule = class PlantillaMantenimientoModule {
};
exports.PlantillaMantenimientoModule = PlantillaMantenimientoModule;
exports.PlantillaMantenimientoModule = PlantillaMantenimientoModule = __decorate([
    (0, common_1.Module)({
        controllers: [plantilla_mantenimiento_controller_1.PlantillaMantenimientoController],
        providers: [plantilla_mantenimiento_service_1.PlantillaMantenimientoService],
        imports: [prisma_module_1.PrismaModule],
        exports: [plantilla_mantenimiento_service_1.PlantillaMantenimientoService],
    })
], PlantillaMantenimientoModule);
//# sourceMappingURL=plantilla-mantenimiento.module.js.map