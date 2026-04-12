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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramaMantenimientoController = void 0;
const common_1 = require("@nestjs/common");
const programa_mantenimiento_service_1 = require("./programa-mantenimiento.service");
const create_programa_mantenimiento_dto_1 = require("./dto/create-programa-mantenimiento.dto");
const update_programa_mantenimiento_dto_1 = require("./dto/update-programa-mantenimiento.dto");
const jwt_cookie_guard_1 = require("../auth/guards/jwt-cookie.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let ProgramaMantenimientoController = class ProgramaMantenimientoController {
    programaService;
    constructor(programaService) {
        this.programaService = programaService;
    }
    async findAll() {
        return this.programaService.findAll();
    }
    findByEstacion(estacionId) {
        return this.programaService.findByEstacion(+estacionId);
    }
    async findOne(id) {
        return this.programaService.findOne(id);
    }
    async create(dto) {
        return this.programaService.create(dto);
    }
    async update(id, dto) {
        return this.programaService.update(id, dto);
    }
    async remove(id) {
        return this.programaService.remove(id);
    }
};
exports.ProgramaMantenimientoController = ProgramaMantenimientoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProgramaMantenimientoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('estacion/:estacionId'),
    __param(0, (0, common_1.Param)('estacionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgramaMantenimientoController.prototype, "findByEstacion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProgramaMantenimientoController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programa_mantenimiento_dto_1.CreateProgramaMantenimientoDto]),
    __metadata("design:returntype", Promise)
], ProgramaMantenimientoController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_programa_mantenimiento_dto_1.UpdateProgramaMantenimientoDto]),
    __metadata("design:returntype", Promise)
], ProgramaMantenimientoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProgramaMantenimientoController.prototype, "remove", null);
exports.ProgramaMantenimientoController = ProgramaMantenimientoController = __decorate([
    (0, common_1.Controller)('programa-mantenimiento'),
    __metadata("design:paramtypes", [programa_mantenimiento_service_1.ProgramaMantenimientoService])
], ProgramaMantenimientoController);
//# sourceMappingURL=programa-mantenimiento.controller.js.map