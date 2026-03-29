import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EstacionModule } from './estacion/estacion.module';
import { ConfigModule } from '@nestjs/config';
import { PersonalautorizadoModule } from './personalautorizado/personalautorizado.module';
import { BitacoraModule } from './bitacora/bitacora.module';
import { RegistrobitacoraModule } from './registrobitacora/registrobitacora.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthpersonalModule } from './authpersonal/authpersonal.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { PlantillaMantenimientoModule } from './plantilla-mantenimiento/plantilla-mantenimiento.module';
import { ProgramaMantenimientoModule } from './programa-mantenimiento/programa-mantenimiento.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ThrottlerModule.forRoot([
      {
        limit: 5,
        ttl: 60, 
      },
    ]),

    PrismaModule,
    EstacionModule,
    PersonalautorizadoModule,
    BitacoraModule,
    RegistrobitacoraModule,
    UsuarioModule,
    AuthModule,
    DashboardModule,
    AuthpersonalModule,
    MantenimientoModule,
    PlantillaMantenimientoModule,
    ProgramaMantenimientoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
