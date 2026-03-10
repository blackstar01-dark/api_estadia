import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BitacoraModule } from 'src/bitacora/bitacora.module';
import { PersonalautorizadoModule } from 'src/personalautorizado/personalautorizado.module';
import { EstacionModule  } from 'src/estacion/estacion.module';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [PrismaModule, BitacoraModule, PersonalautorizadoModule, EstacionModule],
})
export class DashboardModule {}
