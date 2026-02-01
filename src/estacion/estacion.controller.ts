import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { EstacionService } from './estacion.service';
import { Prisma } from '../../generated/prisma/client';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';

@Controller('estaciones')
export class EstacionController {
  constructor(private readonly estacionService: EstacionService) {}

  @Get()
  async findAll() {
    return await this.estacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.estacionService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createEstacionDto: CreateEstacionDto) {
    return await this.estacionService.create(createEstacionDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEstacionDto: UpdateEstacionDto){
    return await this.estacionService.update(Number(id), updateEstacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.estacionService.remove(Number(id));
  }
}
