import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthpersonalService } from './authpersonal.service';
import { LoginPersonalDto } from './dto/create-authpersonal.dto';
import { UpdateAuthpersonalDto } from './dto/update-authpersonal.dto';
import { JwtAuthGuardPersonal } from './guards/jwt-auth.guard';
import { CurrentPersonal } from './decorators/current-personal.decorator';

@Controller('authpersonal')
export class AuthpersonalController {
  constructor(private readonly authpersonalService: AuthpersonalService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: LoginPersonalDto) {
    return this.authpersonalService.loginPersonal(dto);
  }

  @UseGuards(JwtAuthGuardPersonal)
  @Get('profile')
  getProfile(@CurrentPersonal() persona: { id: number}) {
    return this.authpersonalService.getProfile(persona.id);
  }
}
