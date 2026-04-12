import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { LoginDto } from './dto/create-auth.dto';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validateUser(correo: string, contrasena: string): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(UserId: number): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }>;
}
