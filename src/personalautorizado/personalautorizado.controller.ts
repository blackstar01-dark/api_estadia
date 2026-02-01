import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PersonalautorizadoService } from './personalautorizado.service';
import { CreatePersonaAutorizadaDto } from './dto/create-personalautorizado.dto';
import { UpdatePersonalautorizadoDto } from './dto/update-personalautorizado.dto';

@Controller('personalautorizado')
export class PersonalautorizadoController {
  constructor(
    private readonly personalAutorizadoService: PersonalautorizadoService,
  ) {}

  // ==========================
  // CREATE
  // ==========================
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreatePersonaAutorizadaDto) {
    return this.personalAutorizadoService.create(dto);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 20,
  ) {
    return this.personalAutorizadoService.findAll(page, limit);
  }

  // ==========================
  // FIND ONE
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.personalAutorizadoService.findOne(id);
  }

  // ==========================
  // UPDATE
  // ==========================
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePersonalautorizadoDto,
  ) {
    return this.personalAutorizadoService.update(id, dto);
  }

  // ==========================
  // DELETE
  // ==========================
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.personalAutorizadoService.remove(id);
  }
}
