import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { ProgramaMantenimientoService } from './programa-mantenimiento.service';
import { CreateProgramaMantenimientoDto } from './dto/create-programa-mantenimiento.dto';
import { UpdateProgramaMantenimientoDto } from './dto/update-programa-mantenimiento.dto';

import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('programa-mantenimiento')
export class ProgramaMantenimientoController {
  constructor(
    private readonly programaService: ProgramaMantenimientoService,
  ) {}

  // 🔓 Obtener todos
  @Get()
  async findAll() {
    return this.programaService.findAll();
  }

  @Get('estacion/:estacionId')
  findByEstacion(@Param('estacionId') estacionId: string) {
    return this.programaService.findByEstacion(+estacionId);
  }

  // 🔓 Obtener uno
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.programaService.findOne(id);
  }

  // 🔐 ADMIN crear
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  async create(@Body() dto: CreateProgramaMantenimientoDto) {
    return this.programaService.create(dto);
  }

  // 🔐 ADMIN actualizar
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProgramaMantenimientoDto,
  ) {
    return this.programaService.update(id, dto);
  }

  // 🔐 ADMIN eliminar
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.programaService.remove(id);
  }
}
