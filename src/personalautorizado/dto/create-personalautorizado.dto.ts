import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreatePersonaAutorizadaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser texto' })
  nombre: string;

  @IsNotEmpty({ message: 'El cargo es obligatorio' })
  @IsString({ message: 'El cargo debe ser texto' })
  cargo: string;

  @IsNotEmpty({ message: 'La firma es obligatoria' })
  @IsString({ message: 'La firma debe ser texto' })
  firmaHash: string;

  @IsNotEmpty({ message: 'La estación es obligatoria' })
  @IsInt({ message: 'estacionId debe ser un número entero' })
  @Min(1, { message: 'estacionId debe ser mayor a 0' })
  estacionId: number;
}
