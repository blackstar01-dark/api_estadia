"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtCookieGuardPersonal = void 0;
const common_1 = require("@nestjs/common");
const jose_1 = require("jose");
let JwtCookieGuardPersonal = class JwtCookieGuardPersonal {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies?.token;
        if (!token) {
            throw new common_1.UnauthorizedException('No token');
        }
        try {
            const { payload } = await (0, jose_1.jwtVerify)(token, new TextEncoder().encode(process.env.JWT_SECRET));
            request.persona = {
                id: payload.sub,
                nombre: payload.nombre,
                firmaHashPersona: payload.firmaHashPersona,
            };
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException('Token inválido o expirado');
        }
    }
};
exports.JwtCookieGuardPersonal = JwtCookieGuardPersonal;
exports.JwtCookieGuardPersonal = JwtCookieGuardPersonal = __decorate([
    (0, common_1.Injectable)()
], JwtCookieGuardPersonal);
//# sourceMappingURL=jwt-cookie.guard.js.map