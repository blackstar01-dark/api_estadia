import { Injectable } from '@nestjs/common';
import { BitacoraService } from 'src/bitacora/bitacora.service';
import { PersonalautorizadoService } from 'src/personalautorizado/personalautorizado.service';
import { EstacionService } from 'src/estacion/estacion.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly bitacoraService: BitacoraService,
    private readonly personalService: PersonalautorizadoService,
    private readonly estacionService: EstacionService,
  ) {}

  async getStats() {
    const [
      totalBitacoras,
      totalEstacion,
      totalPersonal,
    ] = await Promise.all([
      this.bitacoraService.count(),
      this.estacionService.count(),
      this.personalService.count()
    ]);

    return {
      totalBitacoras,
      totalEstacion,
      totalPersonal
    };
  }
}
