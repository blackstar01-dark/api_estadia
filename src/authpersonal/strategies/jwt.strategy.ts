import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { JwtPayloadPersonal } from "../interface/jwt-payload.interface";

@Injectable()
export class JwtStrategyPersonal extends PassportStrategy(Strategy, 'jwt-personal') {
    constructor(private readonly config: ConfigService) {
        const secret = config.get<string>('JWT_SECRET');

        if (!secret) {
            throw new Error('JWT_SECRET not defined')
        }

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
    }

    async validate(payload: JwtPayloadPersonal) {
        if (!payload) {
            throw new UnauthorizedException('Token invalido')
        }

        return {
            id: payload.sub,
            nombre: payload.nombre
        };
    }
}