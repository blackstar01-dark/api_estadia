"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthpersonalModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const personalautorizado_module_1 = require("../personalautorizado/personalautorizado.module");
const config_1 = require("@nestjs/config");
const authpersonal_service_1 = require("./authpersonal.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const authpersonal_controller_1 = require("./authpersonal.controller");
let AuthpersonalModule = class AuthpersonalModule {
};
exports.AuthpersonalModule = AuthpersonalModule;
exports.AuthpersonalModule = AuthpersonalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt-personal' }),
            personalautorizado_module_1.PersonalautorizadoModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const secret = config.get('JWT_SECRET');
                    const expires = config.get('JWT_ACCESS_EXPIRES');
                    if (!secret || !expires) {
                        throw new Error('JWT configuration missing in .env');
                    }
                    return {
                        secret,
                        signOptions: {
                            expiresIn: expires,
                        },
                    };
                },
            }),
        ],
        controllers: [authpersonal_controller_1.AuthpersonalController],
        providers: [
            authpersonal_service_1.AuthpersonalService,
            jwt_strategy_1.JwtStrategyPersonal,
        ],
        exports: [authpersonal_service_1.AuthpersonalService],
    })
], AuthpersonalModule);
//# sourceMappingURL=authpersonal.module.js.map