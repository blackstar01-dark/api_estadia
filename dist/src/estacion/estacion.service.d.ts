import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';
export declare class EstacionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    count(): Promise<number>;
    findByPersonal(personalId: number): Promise<({
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
    findAll(adminId: number): Promise<{
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
    findOne(id: number, adminId: number): Promise<{
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
    create(dto: CreateEstacionDto, adminId: number): Promise<{
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
    update(id: number, dto: UpdateEstacionDto, adminId: number): Promise<{
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
    remove(id: number, adminId: number): Promise<{
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
