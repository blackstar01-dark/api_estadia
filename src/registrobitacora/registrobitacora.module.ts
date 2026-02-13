import { Module } from '@nestjs/common';
import { RegistroBitacoraService } from './registrobitacora.service';
import { RegistroBitacoraController } from './registrobitacora.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RegistroBitacoraController],
  providers: [RegistroBitacoraService],
  imports: [PrismaModule],
})
export class RegistrobitacoraModule {}
