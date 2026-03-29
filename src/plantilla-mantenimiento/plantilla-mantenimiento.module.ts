import { Module } from '@nestjs/common';
import { PlantillaMantenimientoService } from './plantilla-mantenimiento.service';
import { PlantillaMantenimientoController } from './plantilla-mantenimiento.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PlantillaMantenimientoController],
  providers: [PlantillaMantenimientoService],
  imports: [PrismaModule],
  exports: [PlantillaMantenimientoService],
})
export class PlantillaMantenimientoModule {}
