import { AuthpersonalService } from './authpersonal.service';
import { LoginPersonalDto } from './dto/create-authpersonal.dto';
export declare class AuthpersonalController {
    private readonly authpersonalService;
    constructor(authpersonalService: AuthpersonalService);
    login(dto: LoginPersonalDto): Promise<{
        access_token: string;
    }>;
    getProfile(persona: {
        id: number;
    }): Promise<{
        estacion: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
}
