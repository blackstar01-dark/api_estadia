import { IsEnum, IsInt } from 'class-validator';
import { TipoBitacora } from '../../../generated/prisma/client';

export class CreateBitacoraDto {
  @IsEnum(TipoBitacora, {
    message: 'El tipo de bitácora no es válido',
  })
  tipo: TipoBitacora;

  @IsInt({ message: 'La estación debe ser un id válido' })
  estacionId: number;
}
