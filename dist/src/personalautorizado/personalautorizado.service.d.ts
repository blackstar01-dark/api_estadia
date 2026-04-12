import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaAutorizadaDto } from './dto/create-personalautorizado.dto';
import { UpdatePersonalautorizadoDto } from './dto/update-personalautorizado.dto';
export declare class PersonalautorizadoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePersonaAutorizadaDto, userId: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
    validatePersonal(nombre: string, firma?: string): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    } | null>;
    count(): Promise<number>;
    findAll(page?: number, limit?: number): Promise<({
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
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        cargo: string;
        firmaHashPersona: string;
        estacionId: number;
        creadoPorId: number;
    }>;
    private handlePrismaError;
}
