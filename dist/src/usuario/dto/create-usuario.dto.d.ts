import { RolUsuario } from '../../../generated/prisma/client';
export declare class CreateUsuarioDto {
    nombre: string;
    correo: string;
    contrasena: string;
    rol?: RolUsuario;
}
