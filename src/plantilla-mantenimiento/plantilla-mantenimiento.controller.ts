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
} from '@nestjs/common';

import { PlantillaMantenimientoService } from './plantilla-mantenimiento.service';
import { CreatePlantillaMantenimientoDto } from './dto/create-plantilla-mantenimiento.dto';
import { UpdatePlantillaMantenimientoDto } from './dto/update-plantilla-mantenimiento.dto';

import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('plantillas-mantenimiento')
export class PlantillaMantenimientoController {
  constructor(
    private readonly plantillaService: PlantillaMantenimientoService,
  ) {}

  // 🔓 Público
  @Get()
  async findAll() {
    return this.plantillaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.plantillaService.findOne(id);
  }

  // 🔐 ADMIN
  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  async create(@Body() dto: CreatePlantillaMantenimientoDto) {
    return this.plantillaService.create(dto);
  }

  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePlantillaMantenimientoDto,
  ) {
    return this.plantillaService.update(id, dto);
  }

  @UseGuards(JwtCookieGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.plantillaService.remove(id);
  }
}
