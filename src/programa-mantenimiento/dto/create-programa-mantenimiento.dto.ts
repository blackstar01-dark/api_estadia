import {
  IsInt,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateProgramaMantenimientoDto {
  @IsNotEmpty({ message: 'La estación es obligatoria' })
  @IsInt({ message: 'El id de la estación debe ser un número' })
  estacionId: number;

  @IsNotEmpty({ message: 'La plantilla es obligatoria' })
  @IsInt({ message: 'El id de la plantilla debe ser un número' })
  plantillaId: number;

  @IsOptional()
  @IsBoolean({ message: 'Activo debe ser verdadero o falso' })
  activo?: boolean;

  @IsOptional()
  @IsDateString({}, { message: 'La fecha debe ser una fecha válida' })
  fechaInicio?: string;
}
