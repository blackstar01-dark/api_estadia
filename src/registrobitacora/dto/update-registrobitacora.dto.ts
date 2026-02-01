import { PartialType } from '@nestjs/swagger';
import { CreateRegistroBitacoraDto } from './create-registrobitacora.dto';

export class UpdateRegistroBitacoraDto extends PartialType(CreateRegistroBitacoraDto) {}
