import { Module } from '@nestjs/common';
import { RegistrobitacoraService } from './registrobitacora.service';
import { RegistrobitacoraController } from './registrobitacora.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RegistrobitacoraController],
  providers: [RegistrobitacoraService],
  imports: [PrismaModule],
})
export class RegistrobitacoraModule {}
