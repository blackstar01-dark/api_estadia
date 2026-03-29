import { Module } from '@nestjs/common';
import { ProgramaMantenimientoService } from './programa-mantenimiento.service';
import { ProgramaMantenimientoController } from './programa-mantenimiento.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProgramaMantenimientoController],
  providers: [ProgramaMantenimientoService],
  imports: [PrismaModule],
})
export class ProgramaMantenimientoModule {}
