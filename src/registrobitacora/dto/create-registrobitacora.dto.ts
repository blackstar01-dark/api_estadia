import {
  IsInt,
  IsString,
  IsNotEmpty,
  Min,
  IsEnum,
  IsOptional,
  IsNumber,
} from 'class-validator';

import { Type } from 'class-transformer';

import {
  PeriodicidadBitacora,
  TipoMantenimiento,
} from 'generated/prisma/client';

export class CreateRegistroBitacoraDto {
  @IsNotEmpty({ message: 'La descripción es obligatoria' })
  @IsString({ message: 'La descripción debe ser texto' })
  descripcion: string;

  @IsEnum(PeriodicidadBitacora, {
    message: 'La periodicidad no es válida',
  })
  periodicidad?: PeriodicidadBitacora;

  @IsNotEmpty({ message: 'La firma del responsable es obligatoria' })
  @IsString({ message: 'La firma debe ser texto' })
  firmaHashRegistro: string;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la bitácora debe ser un número entero' })
  @Min(1, { message: 'bitacoraId debe ser mayor a 0' })
  bitacoraId: number;

  @Type(() => Number)
  @IsInt({ message: 'El ID de la estación debe ser un número entero' })
  @Min(1, { message: 'estacionId debe ser mayor a 0' })
  estacionId: number;

  // ======================
  // MANTENIMIENTO
  // ======================

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  programaId?: number;

  @IsOptional()
  @IsEnum(TipoMantenimiento)
  tipoMantenimiento?: TipoMantenimiento;

  @IsOptional()
  @IsString()
  observaciones?: string;

  // ======================
  // DESCARGA PIPA
  // ======================

  @IsOptional()
  @IsString()
  numeroPipa?: string;

  @IsOptional()
  @IsString()
  producto?: string;

  @IsOptional()
  @IsNumber()
  volumenRecibido?: number;

  @IsOptional()
  @IsString()
  proveedor?: string;
}
