import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateEstacionDto {
  @IsNotEmpty({ message: 'El nombre de la estación es obligatorio' })
  @IsString({ message: 'El nombre debe ser texto' })
  @Length(3, 100, {
    message: 'El nombre debe tener entre 3 y 100 caracteres',
  })
  nombre: string;

  @IsNotEmpty({ message: 'La razón social es obligatoria' })
  @IsString({ message: 'La razón social debe ser texto' })
  @Length(3, 150, {
    message: 'La razón social debe tener entre 3 y 150 caracteres',
  })
  razonSocial: string;

  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @IsString({ message: 'La dirección debe ser texto' })
  @Length(10, 255, {
    message: 'La dirección debe tener entre 10 y 255 caracteres',
  })
  direccion: string;

  @IsNotEmpty({ message: 'El permiso CRE es obligatorio' })
  @IsString({ message: 'El permiso CRE debe ser texto' })
  @Matches(/^CRE-\d{5}-\d{4}$/, {
    message: 'El permiso CRE debe tener el formato CRE-12345-2026',
  })
  permisoCRE: string;
}
