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
  UseGuards,
  Req,
  DefaultValuePipe,
} from '@nestjs/common';
import { RegistroBitacoraService } from './registrobitacora.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';

@Controller('registrobitacora')
export class RegistroBitacoraController {
  constructor(
    private readonly registroBitacoraService: RegistroBitacoraService,
  ) {}

  // ==========================
  // CREATE
  // ==========================
  @Post()
  @UseGuards(JwtCookieGuard)
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() dto: CreateRegistroBitacoraDto,
    @Req() req: RequestWithPersonal,
  ) {
    const personalId = req.user.id;
    return this.registroBitacoraService.create(dto, personalId);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    return this.registroBitacoraService.findAll(page, limit);
  }

  // ==========================
  // FIND BY PERSONAL (🔥 IMPORTANTE ARRIBA)
  // ==========================
  @Get('mis-registros')
  @UseGuards(JwtCookieGuard)
  findMisRegistros(@Req() req: RequestWithPersonal) {
    const personalId = req.user.id;
    return this.registroBitacoraService.findByPersonal(personalId);
  }

  // ==========================
  // FIND BY BITACORA
  // ==========================
  @Get('bitacora/:id')
  @UseGuards(JwtAuthGuard)
  findByBitacora(@Param('id', ParseIntPipe) id: number) {
    return this.registroBitacoraService.findByBitacora(id);
  }

  // ==========================
  // FIND ONE (⚠️ SIEMPRE AL FINAL)
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registroBitacoraService.findOne(id);
  }

  // ==========================
  // UPDATE
  // ==========================
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateRegistroBitacoraDto,
  ) {
    return this.registroBitacoraService.update(id, dto);
  }

  // ==========================
  // DELETE
  // ==========================
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.registroBitacoraService.remove(id);
  }
}
