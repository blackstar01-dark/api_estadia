import { Request } from 'express';
import { RolUsuario } from '../../../generated/prisma/client';

export interface RequestWithUser extends Request {
  user: {
    id: number;
    correo: string;
    rol: RolUsuario;
  };
}
