import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtPayload } from './interface/jwt-payload.interface';
import { LoginDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(correo: string, contrasena: string) {
    const user = await this.usuarioService.validateUser(correo, contrasena);
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return user;
  }

  async login(dto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.validateUser(dto.correo, dto.contrasena);

    const payload: JwtPayload = {
      sub: user.id,
      correo: user.correo,
      rol: user.rol,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getProfile(UserId: number) {
    const user = await this.usuarioService.findById(UserId);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    return user;
  }
}
