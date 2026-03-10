import { PartialType } from '@nestjs/swagger';
import { LoginPersonalDto } from './create-authpersonal.dto';

export class UpdateAuthpersonalDto extends PartialType(LoginPersonalDto) {}
