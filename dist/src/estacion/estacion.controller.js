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
exports.EstacionController = void 0;
const common_1 = require("@nestjs/common");
const estacion_service_1 = require("./estacion.service");
const create_estacion_dto_1 = require("./dto/create-estacion.dto");
const update_estacion_dto_1 = require("./dto/update-estacion.dto");
const jwt_cookie_guard_1 = require("../auth/guards/jwt-cookie.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
let EstacionController = class EstacionController {
    estacionService;
    constructor(estacionService) {
        this.estacionService = estacionService;
    }
    async findAllPublic() {
        return this.estacionService.findAllPublic();
    }
    findMisEstaciones(req) {
        const personalId = req.user.id;
        return this.estacionService.findByPersonal(personalId);
    }
    async findOnePublic(id) {
        return this.estacionService.findOnePublic(id);
    }
    async create(dto, user) {
        return this.estacionService.create(dto, user.id);
    }
    async update(id, dto, user) {
        return this.estacionService.update(id, dto, user.id);
    }
    async remove(id, user) {
        return this.estacionService.remove(id, user.id);
    }
};
exports.EstacionController = EstacionController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstacionController.prototype, "findAllPublic", null);
__decorate([
    (0, common_1.Get)('mis-estaciones'),
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EstacionController.prototype, "findMisEstaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstacionController.prototype, "findOnePublic", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estacion_dto_1.CreateEstacionDto, Object]),
    __metadata("design:returntype", Promise)
], EstacionController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estacion_dto_1.UpdateEstacionDto, Object]),
    __metadata("design:returntype", Promise)
], EstacionController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EstacionController.prototype, "remove", null);
exports.EstacionController = EstacionController = __decorate([
    (0, common_1.Controller)('estaciones'),
    __metadata("design:paramtypes", [estacion_service_1.EstacionService])
], EstacionController);
//# sourceMappingURL=estacion.controller.js.map