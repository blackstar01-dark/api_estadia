import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import { PeriodicidadBitacora } from 'generated/prisma/client';
export declare class RegistroBitacoraService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private resolverPeriodicidad;
    create(dto: CreateRegistroBitacoraDto, personalId: number): Promise<{
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    findAll(page?: number, limit?: number): Promise<({
        bitacora: {
            id: number;
            tipo: import("generated/prisma/client").TipoBitacora;
        };
        persona: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    })[]>;
    findByPersonal(personalId: number): Promise<({
        bitacora: {
            id: number;
            tipo: import("generated/prisma/client").TipoBitacora;
        };
    } & {
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    })[]>;
    findByBitacora(bitacoraId: number): Promise<({
        bitacora: {
            id: number;
            tipo: import("generated/prisma/client").TipoBitacora;
        };
        persona: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    })[]>;
    findOne(id: number): Promise<{
        bitacora: {
            id: number;
            tipo: import("generated/prisma/client").TipoBitacora;
        };
        descargaPipa: {
            id: number;
            registroId: number;
            numeroPipa: string;
            producto: string;
            volumenRecibido: number;
            proveedor: string;
        } | null;
        mantenimiento: {
            id: number;
            tipo: import("generated/prisma/client").TipoMantenimiento;
            registroId: number;
            actividad: string;
            observaciones: string | null;
            programaId: number | null;
        } | null;
        persona: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    update(id: number, dto: UpdateRegistroBitacoraDto): Promise<{
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    private handlePrismaError;
}
