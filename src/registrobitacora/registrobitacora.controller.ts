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
import { RegistrobitacoraService } from './registrobitacora.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';

@Controller('registrobitacora')
export class RegistrobitacoraController {
  constructor(
    private readonly registrobitacoraService: RegistrobitacoraService,
  ) {}

  // ==========================
  // CREATE
  // ==========================
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateRegistroBitacoraDto) {
    return this.registrobitacoraService.create(dto);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 20,
  ) {
    return this.registrobitacoraService.findAll(page, limit);
  }

  // ==========================
  // FIND ONE
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registrobitacoraService.findOne(id);
  }

  // ==========================
  // UPDATE
  // ==========================
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRegistroBitacoraDto,
  ) {
    return this.registrobitacoraService.update(id, dto);
  }

  // ==========================
  // DELETE
  // ==========================
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.registrobitacoraService.remove(id);
  }
}
