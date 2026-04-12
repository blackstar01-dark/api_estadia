import { AuthService } from './auth.service';
import { LoginDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(user: {
        id: number;
    }): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }>;
}
