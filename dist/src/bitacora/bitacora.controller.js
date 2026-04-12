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
exports.BitacoraController = void 0;
const common_1 = require("@nestjs/common");
const bitacora_service_1 = require("./bitacora.service");
const jwt_cookie_guard_1 = require("../auth/guards/jwt-cookie.guard");
let BitacoraController = class BitacoraController {
    bitacoraService;
    constructor(bitacoraService) {
        this.bitacoraService = bitacoraService;
    }
    findMisBitacoras(req) {
        const personalId = req.user.id;
        return this.bitacoraService.findByPersonal(personalId);
    }
    findAll(page, limit) {
        return this.bitacoraService.findAll(page, limit);
    }
    findByTipo(tipo) {
        return this.bitacoraService.findByTipo(tipo);
    }
    findOne(id) {
        return this.bitacoraService.findOne(id);
    }
    findByEstacion(id) {
        return this.bitacoraService.findByEstacion(id);
    }
};
exports.BitacoraController = BitacoraController;
__decorate([
    (0, common_1.Get)('mis-bitacoras'),
    (0, common_1.UseGuards)(jwt_cookie_guard_1.JwtCookieGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "findMisBitacoras", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(20), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('tipo/:tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "findByTipo", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/estacion/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BitacoraController.prototype, "findByEstacion", null);
exports.BitacoraController = BitacoraController = __decorate([
    (0, common_1.Controller)('bitacora'),
    __metadata("design:paramtypes", [bitacora_service_1.BitacoraService])
], BitacoraController);
//# sourceMappingURL=bitacora.controller.js.map