import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import {
  TipoBitacora,
  PeriodicidadBitacora,
} from '../../../generated/prisma/client';

export class CreateBitacoraDto {
  @IsEnum(TipoBitacora, {
    message: 'El tipo de bitácora no es válido',
  })
  tipo: TipoBitacora;

  @IsEnum(PeriodicidadBitacora, {
    message: 'La periodicidad no es válida',
  })
  periodicidad: PeriodicidadBitacora;

  @IsInt({ message: 'La estación debe ser un id válido' })
  estacionId: number;

  @IsOptional()
  @IsString({ message: 'El fundamento debe ser un texto válido' })
  fundamento?: string;
}
