import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsInt,
  IsEnum,
} from 'class-validator';
import { TipoMantenimiento } from 'generated/prisma/enums';
export class CreateMantenimientoDto {
  @IsNotEmpty({ message: 'El registro de bitácora es obligatorio' })
  @IsInt({ message: 'El registroId debe ser un número' })
  registroId: number;

  @IsOptional()
  @IsInt({ message: 'El programaId debe ser un número' })
  programaId?: number;

  @IsNotEmpty({ message: 'El tipo de mantenimiento es obligatorio' })
  @IsEnum(TipoMantenimiento, {
    message: 'El tipo debe ser PREVENTIVO o CORRECTIVO',
  })
  tipo: TipoMantenimiento;

  @IsNotEmpty({ message: 'La actividad de mantenimiento es obligatoria' })
  @IsString()
  @Length(5, 255, {
    message: 'La actividad debe tener entre 5 y 255 caracteres',
  })
  actividad: string;

  @IsOptional()
  @IsString()
  @Length(3, 500, {
    message: 'Las observaciones deben tener entre 3 y 500 caracteres',
  })
  observaciones?: string;
}
