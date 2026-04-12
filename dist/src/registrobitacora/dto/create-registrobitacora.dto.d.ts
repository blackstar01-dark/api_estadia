import { PeriodicidadBitacora, TipoMantenimiento } from 'generated/prisma/client';
export declare class CreateRegistroBitacoraDto {
    descripcion: string;
    periodicidad?: PeriodicidadBitacora;
    firmaHashRegistro: string;
    bitacoraId: number;
    estacionId: number;
    programaId?: number;
    tipoMantenimiento?: TipoMantenimiento;
    observaciones?: string;
    numeroPipa?: string;
    producto?: string;
    volumenRecibido?: number;
    proveedor?: string;
}
