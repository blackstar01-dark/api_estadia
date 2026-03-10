import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; 
import { PersonalautorizadoModule } from 'src/personalautorizado/personalautorizado.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthpersonalService } from './authpersonal.service';
import { JwtAuthGuardPersonal } from './guards/jwt-auth.guard';
import { JwtStrategyPersonal } from './strategies/jwt.strategy';
import { AuthpersonalController } from './authpersonal.controller';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt-personal' }), 
    PersonalautorizadoModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret = config.get<string>('JWT_SECRET');
        const expires = config.get<string>('JWT_ACCESS_EXPIRES');

        if (!secret || !expires) {
          throw new Error('JWT configuration missing in .env');
        }

        return {
          secret,
          signOptions: {
            expiresIn: expires as any,
          },
        };
      },
    }),
  ],
  controllers: [AuthpersonalController],
  providers: [
    AuthpersonalService,
    JwtStrategyPersonal,
  ],
  exports: [AuthpersonalService],
})
export class AuthpersonalModule {}