import { BitacoraService } from './bitacora.service';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';
export declare class BitacoraController {
    private readonly bitacoraService;
    constructor(bitacoraService: BitacoraService);
    findMisBitacoras(req: RequestWithPersonal): Promise<({
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
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
        tipo: import("../../generated/prisma/enums").TipoBitacora;
        fundamento: string;
    })[]>;
    findAll(page: number, limit: number): Promise<({
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
        tipo: import("../../generated/prisma/enums").TipoBitacora;
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
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
        tipo: import("../../generated/prisma/enums").TipoBitacora;
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
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
        tipo: import("../../generated/prisma/enums").TipoBitacora;
        fundamento: string;
    }>;
    findByEstacion(id: number): Promise<({
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
            periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora | null;
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
        tipo: import("../../generated/prisma/enums").TipoBitacora;
        fundamento: string;
    })[]>;
}
