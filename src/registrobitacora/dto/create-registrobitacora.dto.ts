import { IsInt, IsString, IsNotEmpty, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRegistroBitacoraDto {

  @Type(() => Number)
  @IsInt({ message: 'El folio debe ser un número entero' })
  @Min(1, { message: 'El folio debe ser mayor a 0' })
  folio: number;

  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString({ message: 'La descripción debe ser texto' })
  descripcion: string;

  @IsNotEmpty({ message: 'La firma del responsable es obligatoria' })
  @IsString({ message: 'La firma debe ser texto' })
  firmaHashRegistro: string;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la persona debe ser un número entero' })
  @Min(1, { message: 'personaId debe ser mayor a 0' })
  personaId: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la bitácora debe ser un número entero' })
  @Min(1, { message: 'bitacoraId debe ser mayor a 0' })
  bitacoraId: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la estación debe ser un número entero' })
  @Min(1, { message: 'estacionId debe ser mayor a 0' })
  estacionId: number;
}
