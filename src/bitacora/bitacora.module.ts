import { Module } from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { BitacoraController } from './bitacora.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BitacoraController],
  providers: [BitacoraService],
  imports: [PrismaModule],
})
export class BitacoraModule {}
