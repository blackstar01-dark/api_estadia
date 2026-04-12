import { PersonalautorizadoService } from './personalautorizado.service';
import { CreatePersonaAutorizadaDto } from './dto/create-personalautorizado.dto';
import { UpdatePersonalautorizadoDto } from './dto/update-personalautorizado.dto';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';
export declare class PersonalautorizadoController {
    private readonly personalAutorizadoService;
    constructor(personalAutorizadoService: PersonalautorizadoService);
    create(dto: CreatePersonaAutorizadaDto, req: RequestWithPersonal): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
    findAll(page: number, limit: number): Promise<({
        estacion: {
            id: number;
            nombre: string;
        };
        creadoPor: {
            id: number;
            nombre: string;
            correo: string;
        };
    } & {
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    })[]>;
    getMyProfile(req: RequestWithPersonal): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, dto: UpdatePersonalautorizadoDto): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
    remove(id: number): Promise<void>;
}
