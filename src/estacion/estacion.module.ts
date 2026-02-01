import { Module } from '@nestjs/common';
import { EstacionService } from './estacion.service';
import { EstacionController } from './estacion.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EstacionController],
  providers: [EstacionService],
  imports: [PrismaModule],
})
export class EstacionModule {}
