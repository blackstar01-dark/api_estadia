import { EstacionService } from './estacion.service';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';
import type { AuthUser } from 'src/auth/interface/auth-user.interface';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';
export declare class EstacionController {
    private readonly estacionService;
    constructor(estacionService: EstacionService);
    findAllPublic(): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    }[]>;
    findMisEstaciones(req: RequestWithPersonal): Promise<({
        personas: {
            id: number;
            nombre: string;
            createdAt: Date;
            cargo: string;
            firmaHashPersona: string;
            estacionId: number;
            creadoPorId: number;
        }[];
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    })[]>;
    findOnePublic(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    }>;
    create(dto: CreateEstacionDto, user: AuthUser): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    }>;
    update(id: number, dto: UpdateEstacionDto, user: AuthUser): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    }>;
    remove(id: number, user: AuthUser): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        razonSocial: string;
        rfc: string;
        permisoCRE: string;
        direccion: string;
        representante: string;
        telefono: string | null;
        adminId: number;
    }>;
}
