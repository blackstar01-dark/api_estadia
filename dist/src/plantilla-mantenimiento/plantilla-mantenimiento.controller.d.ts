import { PlantillaMantenimientoService } from './plantilla-mantenimiento.service';
import { CreatePlantillaMantenimientoDto } from './dto/create-plantilla-mantenimiento.dto';
import { UpdatePlantillaMantenimientoDto } from './dto/update-plantilla-mantenimiento.dto';
export declare class PlantillaMantenimientoController {
    private readonly plantillaService;
    constructor(plantillaService: PlantillaMantenimientoService);
    findAll(): Promise<{
        id: number;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
        actividad: string;
        numeralNom: string;
        activa: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
        actividad: string;
        numeralNom: string;
        activa: boolean;
    }>;
    create(dto: CreatePlantillaMantenimientoDto): Promise<{
        id: number;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
        actividad: string;
        numeralNom: string;
        activa: boolean;
    }>;
    update(id: number, dto: UpdatePlantillaMantenimientoDto): Promise<{
        id: number;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
        actividad: string;
        numeralNom: string;
        activa: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        periodicidad: import("../../generated/prisma/enums").PeriodicidadBitacora;
        actividad: string;
        numeralNom: string;
        activa: boolean;
    }>;
}
