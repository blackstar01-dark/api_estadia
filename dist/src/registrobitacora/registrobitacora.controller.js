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
exports.RegistroBitacoraController = void 0;
const common_1 = require("@nestjs/common");
const registrobitacora_service_1 = require("./registrobitacora.service");
const create_registrobitacora_dto_1 = require("./dto/create-registrobitacora.dto");
const update_registrobitacora_dto_1 = require("./dto/update-registrobitacora.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const jwt_cookie_guard_1 = require("../auth/guards/jwt-cookie.guard");
let RegistroBitacoraController = class RegistroBitacoraController {
    registroBitacoraService;
    constructor(registroBitacoraService) {
        this.registroBitacoraService = registroBitacoraService;
    }
    create(dto, req) {
        const personalId = req.user.id;
        return this.registroBitacoraService.create(dto, personalId);
    }
    findAll(page, limit) {
        return this.registroBitacoraService.findAll(page, limit);
    }
    findMisRegistros(req) {
        const personalId = req.user.id;
        return this.registroBitacoraService.findByPersonal(personalId);
    }
    findByBitacora(id) {
        return this.registroBitacoraService.findByBitacora(id);
    }
    findOne(id) {
        return this.registroBitacoraService.findOne(id);
    }
    update(id, dto) {
        return this.registroBitacoraService.update(id, dto);
    }
    async remove(id) {
        await this.registroBitacoraService.remove(id);
    }
};
exports.RegistroBitacoraController = RegistroBitacoraController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registrobitacora_dto_1.CreateRegistroBitacoraDto, Object]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(20), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('mis-registros'),
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "findMisRegistros", null);
__decorate([
    (0, common_1.Get)('bitacora/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "findByBitacora", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_registrobitacora_dto_1.UpdateRegistroBitacoraDto]),
    __metadata("design:returntype", void 0)
], RegistroBitacoraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegistroBitacoraController.prototype, "remove", null);
exports.RegistroBitacoraController = RegistroBitacoraController = __decorate([
    (0, common_1.Controller)('registrobitacora'),
    __metadata("design:paramtypes", [registrobitacora_service_1.RegistroBitacoraService])
], RegistroBitacoraController);
//# sourceMappingURL=registrobitacora.controller.js.map