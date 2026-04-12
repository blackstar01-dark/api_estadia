import { TipoBitacora, PeriodicidadBitacora } from '../../../generated/prisma/client';
export declare class CreateBitacoraDto {
    tipo: TipoBitacora;
    periodicidad: PeriodicidadBitacora;
    estacionId: number;
    fundamento?: string;
}
