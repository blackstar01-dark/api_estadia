import { TipoMantenimiento } from 'generated/prisma/enums';
export declare class CreateMantenimientoDto {
    registroId: number;
    programaId?: number;
    tipo: TipoMantenimiento;
    actividad: string;
    observaciones?: string;
}
