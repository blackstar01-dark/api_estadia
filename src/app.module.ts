import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EstacionModule } from './estacion/estacion.module';
import { ConfigModule } from '@nestjs/config';
import { PersonalautorizadoModule } from './personalautorizado/personalautorizado.module';
import { BitacoraModule } from './bitacora/bitacora.module';
import { RegistrobitacoraModule } from './registrobitacora/registrobitacora.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    EstacionModule,
    PersonalautorizadoModule,
    BitacoraModule,
    RegistrobitacoraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
