import { PartialType } from '@nestjs/swagger';
import { CreateProgramaMantenimientoDto } from './create-programa-mantenimiento.dto';

export class UpdateProgramaMantenimientoDto extends PartialType(CreateProgramaMantenimientoDto) {}
