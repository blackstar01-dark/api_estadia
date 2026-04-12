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
exports.AuthpersonalService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const personalautorizado_service_1 = require("../personalautorizado/personalautorizado.service");
let AuthpersonalService = class AuthpersonalService {
    personalService;
    jwtService;
    constructor(personalService, jwtService) {
        this.personalService = personalService;
        this.jwtService = jwtService;
    }
    async validatePersonal(nombre, firma) {
        const personal = await this.personalService.validatePersonal(nombre, firma);
        if (!personal) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        return personal;
    }
    async loginPersonal(dto) {
        const persona = await this.validatePersonal(dto.nombre, dto.firma);
        const payload = {
            sub: persona.id,
            nombre: persona.nombre,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async getProfile(PersonaId) {
        const persona = await this.personalService.findOne(PersonaId);
        if (!persona) {
            throw new common_1.UnauthorizedException('Usuario no encontrado');
        }
        return persona;
    }
};
exports.AuthpersonalService = AuthpersonalService;
exports.AuthpersonalService = AuthpersonalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [personalautorizado_service_1.PersonalautorizadoService,
        jwt_1.JwtService])
], AuthpersonalService);
//# sourceMappingURL=authpersonal.service.js.map