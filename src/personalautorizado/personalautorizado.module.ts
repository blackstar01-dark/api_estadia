import { Module } from '@nestjs/common';
import { PersonalautorizadoService } from './personalautorizado.service';
import { PersonalautorizadoController } from './personalautorizado.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PersonalautorizadoController],
  providers: [PersonalautorizadoService],
  imports: [PrismaModule],
})
export class PersonalautorizadoModule {}
