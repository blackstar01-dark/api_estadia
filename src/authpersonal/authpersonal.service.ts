import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonalautorizadoService } from 'src/personalautorizado/personalautorizado.service';
import { LoginPersonalDto } from './dto/create-authpersonal.dto';
import { UpdateAuthpersonalDto } from './dto/update-authpersonal.dto';
import { JwtPayloadPersonal } from './interface/jwt-payload.interface';

@Injectable()
export class AuthpersonalService {
  constructor(
    private readonly personalService: PersonalautorizadoService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePersonal(nombre: string, firma: string) {
    const personal = await this.personalService.validatePersonal(nombre, firma);
    if (!personal) {
      throw new UnauthorizedException('Credenciales incorrectas')
    }
    return personal;
  }

  async loginPersonal(dto: LoginPersonalDto): Promise<{ access_token: string}> {
    const persona = await this.validatePersonal(dto.nombre, dto.firma);

    const payload: JwtPayloadPersonal = {
      sub: persona.id,
      nombre: persona.nombre,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getProfile(PersonaId: number) {
    const persona = await this.personalService.findOne(PersonaId);

    if(!persona) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return persona;
  }
}
