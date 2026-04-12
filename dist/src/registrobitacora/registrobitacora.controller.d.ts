import { RegistroBitacoraService } from './registrobitacora.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';
export declare class RegistroBitacoraController {
    private readonly registroBitacoraService;
    constructor(registroBitacoraService: RegistroBitacoraService);
    create(dto: CreateRegistroBitacoraDto, req: RequestWithPersonal): Promise<{
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    findAll(page: number, limit: number): Promise<({
        bitacora: {
            id: number;
            tipo: import("../../generated/prisma/enums").TipoBitacora;
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
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    })[]>;
    findMisRegistros(req: RequestWithPersonal): Promise<({
        bitacora: {
            id: number;
            tipo: import("../../generated/prisma/enums").TipoBitacora;
        };
    } & {
        id: number;
        estacionId: number;
        folio: number;
        fechaHora: Date;
        descripcion: string;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    })[]>;
    findByBitacora(id: number): Promise<({
        bitacora: {
            id: number;
            tipo: import("../../generated/prisma/enums").TipoBitacora;
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
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
            tipo: import("../../generated/prisma/enums").TipoBitacora;
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
            tipo: import("../../generated/prisma/enums").TipoMantenimiento;
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
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
        firmaHashRegistro: string;
        firmaAlgoritmo: string;
        firmaFecha: Date;
        cerrado: boolean;
        fechaCierre: Date;
        personaId: number;
        bitacoraId: number;
    }>;
    remove(id: number): Promise<void>;
}
