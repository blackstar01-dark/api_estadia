import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { TipoBitacora } from 'generated/prisma/client';
export declare class BitacoraService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(page?: number, limit?: number): Promise<({
        estacion: {
            id: number;
            nombre: string;
            permisoCRE: string;
        };
        registros: {
            id: number;
            folio: number;
            fechaHora: Date;
        }[];
    } & {
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    })[]>;
    findByPersonal(personalId: number): Promise<({
        estacion: {
            id: number;
            nombre: string;
            permisoCRE: string;
        };
        registros: ({
            persona: {
                id: number;
                nombre: string;
                cargo: string;
            };
        } & {
            id: number;
            estacionId: number;
            folio: number;
            fechaHora: Date;
            descripcion: string;
            periodicidad: import("generated/prisma/client").PeriodicidadBitacora | null;
            firmaHashRegistro: string;
            firmaAlgoritmo: string;
            firmaFecha: Date;
            cerrado: boolean;
            fechaCierre: Date;
            personaId: number;
            bitacoraId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    })[]>;
    count(): Promise<number>;
    findByEstacion(estacionId: number): Promise<({
        estacion: {
            id: number;
            nombre: string;
            permisoCRE: string;
        };
        registros: ({
            persona: {
                id: number;
                nombre: string;
                cargo: string;
            };
        } & {
            id: number;
            estacionId: number;
            folio: number;
            fechaHora: Date;
            descripcion: string;
            periodicidad: import("generated/prisma/client").PeriodicidadBitacora | null;
            firmaHashRegistro: string;
            firmaAlgoritmo: string;
            firmaFecha: Date;
            cerrado: boolean;
            fechaCierre: Date;
            personaId: number;
            bitacoraId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    })[]>;
    findByTipo(tipo: string): Promise<({
        estacion: {
            id: number;
            nombre: string;
            permisoCRE: string;
        };
        registros: ({
            persona: {
                id: number;
                nombre: string;
                cargo: string;
            };
        } & {
            id: number;
            estacionId: number;
            folio: number;
            fechaHora: Date;
            descripcion: string;
            periodicidad: import("generated/prisma/client").PeriodicidadBitacora | null;
            firmaHashRegistro: string;
            firmaAlgoritmo: string;
            firmaFecha: Date;
            cerrado: boolean;
            fechaCierre: Date;
            personaId: number;
            bitacoraId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    })[]>;
    findOne(id: number): Promise<{
        estacion: {
            id: number;
            nombre: string;
            permisoCRE: string;
        };
        registros: ({
            persona: {
                id: number;
                nombre: string;
                cargo: string;
            };
        } & {
            id: number;
            estacionId: number;
            folio: number;
            fechaHora: Date;
            descripcion: string;
            periodicidad: import("generated/prisma/client").PeriodicidadBitacora | null;
            firmaHashRegistro: string;
            firmaAlgoritmo: string;
            firmaFecha: Date;
            cerrado: boolean;
            fechaCierre: Date;
            personaId: number;
            bitacoraId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    }>;
    update(id: number, dto: UpdateBitacoraDto): Promise<{
        id: number;
        createdAt: Date;
        estacionId: number;
        tipo: TipoBitacora;
        fundamento: string;
    }>;
    private handlePrismaError;
}
