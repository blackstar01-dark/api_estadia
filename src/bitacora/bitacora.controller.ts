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
  DefaultValuePipe,
} from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';

@Controller('bitacora')
export class BitacoraController {
  constructor(private readonly bitacoraService: BitacoraService) {}

  // ==========================
  // CREATE
  // ==========================
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateBitacoraDto) {
    return this.bitacoraService.create(dto);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    return this.bitacoraService.findAll(page, limit);
  }

  // ==========================
  // FIND ONE
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bitacoraService.findOne(id);
  }

  // ==========================
  // UPDATE
  // ==========================
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBitacoraDto,
  ) {
    return this.bitacoraService.update(id, dto);
  }

  // ==========================
  // DELETE
  // ==========================
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.bitacoraService.remove(id);
  }
}
