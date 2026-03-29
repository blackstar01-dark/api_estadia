import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { jwtVerify } from 'jose';

@Injectable()
export class JwtCookieGuardPersonal implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.cookies?.token;

        if (!token) {
            throw new UnauthorizedException('No token');
        }

        try {
            const { payload} = await jwtVerify(
                token,
                new TextEncoder().encode(process.env.JWT_SECRET)
            );

            request.persona = {
                id: payload.sub,
                nombre: payload.nombre,
                firmaHashPersona: payload.firmaHashPersona,
            };

            return true;
    } catch (err) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
