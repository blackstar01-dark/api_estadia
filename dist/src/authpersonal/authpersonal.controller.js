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
exports.AuthpersonalController = void 0;
const common_1 = require("@nestjs/common");
const authpersonal_service_1 = require("./authpersonal.service");
const create_authpersonal_dto_1 = require("./dto/create-authpersonal.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const current_personal_decorator_1 = require("./decorators/current-personal.decorator");
let AuthpersonalController = class AuthpersonalController {
    authpersonalService;
    constructor(authpersonalService) {
        this.authpersonalService = authpersonalService;
    }
    login(dto) {
        return this.authpersonalService.loginPersonal(dto);
    }
    getProfile(persona) {
        return this.authpersonalService.getProfile(persona.id);
    }
};
exports.AuthpersonalController = AuthpersonalController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_authpersonal_dto_1.LoginPersonalDto]),
    __metadata("design:returntype", void 0)
], AuthpersonalController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuardPersonal),
    (0, common_1.Get)('profile'),
    __param(0, (0, current_personal_decorator_1.CurrentPersonal)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthpersonalController.prototype, "getProfile", null);
exports.AuthpersonalController = AuthpersonalController = __decorate([
    (0, common_1.Controller)('authpersonal'),
    __metadata("design:paramtypes", [authpersonal_service_1.AuthpersonalService])
], AuthpersonalController);
//# sourceMappingURL=authpersonal.controller.js.map