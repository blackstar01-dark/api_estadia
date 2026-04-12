import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramaMantenimientoDto } from './dto/create-programa-mantenimiento.dto';
import { UpdateProgramaMantenimientoDto } from './dto/update-programa-mantenimiento.dto';
export declare class ProgramaMantenimientoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        estacion: {
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
        };
        plantilla: {
            id: number;
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
            actividad: string;
            numeralNom: string;
            activa: boolean;
        };
    } & {
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    })[]>;
    findByEstacion(estacionId: number): Promise<({
        plantilla: {
            id: number;
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
            actividad: string;
            numeralNom: string;
            activa: boolean;
        };
    } & {
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    })[]>;
    findOne(id: number): Promise<{
        estacion: {
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
        };
        plantilla: {
            id: number;
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
            actividad: string;
            numeralNom: string;
            activa: boolean;
        };
        mantenimientos: {
            id: number;
            tipo: import("../../generated/prisma/enums").TipoMantenimiento;
            registroId: number;
            actividad: string;
            observaciones: string | null;
            programaId: number | null;
        }[];
    } & {
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    }>;
    create(dto: CreateProgramaMantenimientoDto): Promise<{
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    }>;
    update(id: number, dto: UpdateProgramaMantenimientoDto): Promise<{
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        estacionId: number;
        plantillaId: number;
        activo: boolean;
        fechaInicio: Date;
    }>;
}
