import {
  IsString,
  IsNotEmpty,
  Length,
  IsBoolean,
  IsOptional,
} from 'class-validator';

import { PeriodicidadBitacora } from 'generated/prisma/enums';

export class CreatePlantillaMantenimientoDto {
  @IsNotEmpty({ message: 'El numeral de la NOM es obligatorio' })
  @IsString()
  @Length(1, 20, {
    message: 'El numeral debe tener entre 1 y 20 caracteres',
  })
  numeralNom: string;

  @IsNotEmpty({ message: 'La actividad de mantenimiento es obligatoria' })
  @IsString()
  @Length(5, 255, {
    message: 'La actividad debe tener entre 5 y 255 caracteres',
  })
  actividad: string;

  @IsNotEmpty({ message: 'La periodicidad es obligatoria' })
  @IsString()
  periodicidad: PeriodicidadBitacora;

  @IsOptional()
  @IsBoolean()
  activa?: boolean;
}
