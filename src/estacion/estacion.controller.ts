import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { EstacionService } from './estacion.service';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';
import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import type { AuthUser } from 'src/auth/interface/auth-user.interface';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';

@Controller('estaciones')
export class EstacionController {
  constructor(private readonly estacionService: EstacionService) {}

  // 🔓 Público
  @Get()
  async findAllPublic() {
    return this.estacionService.findAllPublic();
  }

  @Get('mis-estaciones')
  @UseGuards(JwtCookieGuard)
  findMisEstaciones(@Req() req: RequestWithPersonal) {
    const personalId = req.user.id;
    return this.estacionService.findByPersonal(personalId);
  }

  @Get(':id')
  async findOnePublic(@Param('id', ParseIntPipe) id: number) {
    return this.estacionService.findOnePublic(id);
  }

  // 🔐 ADMIN
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  async create(@Body() dto: CreateEstacionDto, @CurrentUser() user: AuthUser) {
    return this.estacionService.create(dto, user.id);
  }

  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEstacionDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.estacionService.update(id, dto, user.id);
  }

  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: AuthUser,
  ) {
    return this.estacionService.remove(id, user.id);
  }
}
