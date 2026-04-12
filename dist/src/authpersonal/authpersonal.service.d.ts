import { JwtService } from '@nestjs/jwt';
import { PersonalautorizadoService } from 'src/personalautorizado/personalautorizado.service';
import { LoginPersonalDto } from './dto/create-authpersonal.dto';
export declare class AuthpersonalService {
    private readonly personalService;
    private readonly jwtService;
    constructor(personalService: PersonalautorizadoService, jwtService: JwtService);
    validatePersonal(nombre: string, firma: string): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
    loginPersonal(dto: LoginPersonalDto): Promise<{
        access_token: string;
    }>;
    getProfile(PersonaId: number): Promise<{
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
