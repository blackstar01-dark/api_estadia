import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RequestWithUser } from '../interface/request-with-user.interface';
import { RolUsuario } from '../../../generated/prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RolUsuario[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Si la ruta no tiene @Roles(), permitir acceso
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    // Si no hay usuario en el request, no está autenticado
    if (!user) {
      throw new UnauthorizedException('Usuario no autenticado');
    }

    const hasRole = requiredRoles.includes(user.rol as RolUsuario);

    if (!hasRole) {
      throw new ForbiddenException('No tienes permisos para acceder');
    }

    return true;
  }
}
