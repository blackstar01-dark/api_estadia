import {
  IsString,
  IsNotEmpty,
  Length,
  Matches,
  IsOptional,
} from 'class-validator';

export class CreateEstacionDto {
  @IsNotEmpty({ message: 'El nombre de la estación es obligatorio' })
  @IsString()
  @Length(3, 100)
  nombre: string;

  @IsNotEmpty({ message: 'La razón social es obligatoria' })
  @IsString()
  @Length(3, 150)
  razonSocial: string;

  @IsNotEmpty({ message: 'El RFC es obligatorio' })
  @IsString()
  @Matches(
    /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
    { message: 'RFC inválido' },
  )
  rfc: string;

  @IsNotEmpty({ message: 'El permiso CRE es obligatorio' })
  @IsString()
  @Matches(/^CRE-\d{5}-\d{4}$/, {
    message: 'El permiso CRE debe tener el formato CRE-12345-2026',
  })
  permisoCRE: string;

  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @IsString()
  @Length(10, 255)
  direccion: string;

  @IsNotEmpty({ message: 'El representante es obligatorio' })
  @IsString()
  @Length(3, 100)
  representante: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}
