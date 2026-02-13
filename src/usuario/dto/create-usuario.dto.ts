import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { RolUsuario } from '../../../generated/prisma/client';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString()
  nombre: string;

  @IsNotEmpty({ message: 'El correo es obligatorio' })
  @IsEmail()
  correo: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString()
  @MinLength(6)
  contrasena: string;

  @IsOptional()
  @IsEnum(RolUsuario)
  rol?: RolUsuario;
}
