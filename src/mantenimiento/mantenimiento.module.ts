import { Module } from '@nestjs/common';
import { MantenimientoService } from './mantenimiento.service';
import { MantenimientoController } from './mantenimiento.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [MantenimientoController],
  providers: [MantenimientoService],
  imports: [PrismaModule],
  exports: [MantenimientoService],
})
export class MantenimientoModule {}
