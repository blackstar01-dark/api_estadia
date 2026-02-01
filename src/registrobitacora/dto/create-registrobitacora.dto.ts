import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateRegistroBitacoraDto {
  @IsInt()
  @Min(1)
  folio: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  firmaResponsable: string;

  @IsInt()
  @Min(1)
  personaId: number;

  @IsInt()
  @Min(1)
  bitacoraId: number;
}
