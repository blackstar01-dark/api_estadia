import { PeriodicidadBitacora } from 'generated/prisma/enums';
export declare class CreatePlantillaMantenimientoDto {
    numeralNom: string;
    actividad: string;
    periodicidad: PeriodicidadBitacora;
    activa?: boolean;
}
