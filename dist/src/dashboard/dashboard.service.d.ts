import { BitacoraService } from 'src/bitacora/bitacora.service';
import { PersonalautorizadoService } from 'src/personalautorizado/personalautorizado.service';
import { EstacionService } from 'src/estacion/estacion.service';
export declare class DashboardService {
    private readonly bitacoraService;
    private readonly personalService;
    private readonly estacionService;
    constructor(bitacoraService: BitacoraService, personalService: PersonalautorizadoService, estacionService: EstacionService);
    getStats(): Promise<{
        totalBitacoras: number;
        totalEstacion: number;
        totalPersonal: number;
    }>;
}
