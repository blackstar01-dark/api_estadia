import { PartialType } from '@nestjs/swagger';
import { CreatePlantillaMantenimientoDto } from './create-plantilla-mantenimiento.dto';

export class UpdatePlantillaMantenimientoDto extends PartialType(CreatePlantillaMantenimientoDto) {}
