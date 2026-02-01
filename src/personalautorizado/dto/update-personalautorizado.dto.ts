import { PartialType } from '@nestjs/swagger';
import { CreatePersonaAutorizadaDto } from './create-personalautorizado.dto';

export class UpdatePersonalautorizadoDto extends PartialType(CreatePersonaAutorizadaDto) {}
