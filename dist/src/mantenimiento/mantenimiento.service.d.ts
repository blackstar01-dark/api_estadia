import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
export declare class MantenimientoService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        programa: ({
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
        }) | null;
        registro: {
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
        };
    } & {
        id: number;
        tipo: import("../../generated/prisma/enums").TipoMantenimiento;
        registroId: number;
        actividad: string;
        observaciones: string | null;
        programaId: number | null;
    })[]>;
    findOne(id: number): Promise<{
        programa: ({
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
        }) | null;
        registro: {
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
        };
    } & {
        id: number;
        tipo: import("../../generated/prisma/enums").TipoMantenimiento;
        registroId: number;
        actividad: string;
        observaciones: string | null;
        programaId: number | null;
    }>;
    update(id: number, dto: UpdateMantenimientoDto): Promise<{
        id: number;
        tipo: import("../../generated/prisma/enums").TipoMantenimiento;
        registroId: number;
        actividad: string;
        observaciones: string | null;
        programaId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        tipo: import("../../generated/prisma/enums").TipoMantenimiento;
        registroId: number;
        actividad: string;
        observaciones: string | null;
        programaId: number | null;
    }>;
}
