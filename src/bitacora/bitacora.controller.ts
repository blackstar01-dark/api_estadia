import {
  Controller,
  Get,
  Body,
  Param,
  ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
  DefaultValuePipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BitacoraService } from './bitacora.service';
import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import type { RequestWithPersonal } from 'src/authpersonal/interface/request-with-personal-interface';

@Controller('bitacora')
export class BitacoraController {
  constructor(private readonly bitacoraService: BitacoraService) {}

  // ==========================
  // FIND PERSONAL
  // ==========================
  @Get('mis-bitacoras')
  @UseGuards(JwtCookieGuard)
  @HttpCode(HttpStatus.OK)
  findMisBitacoras(@Req() req: RequestWithPersonal) {
    const personalId = req.user.id;
    return this.bitacoraService.findByPersonal(personalId);
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
  // FIND BY TIPO (ENUM DIRECTO)
  // ==========================
  @Get('tipo/:tipo')
  findByTipo(@Param('tipo') tipo: string) {
    return this.bitacoraService.findByTipo(tipo);
  }

  // ==========================
  // FIND ONE
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bitacoraService.findOne(id);
  }

  // ==========================
  // FIND BY ESTACION
  // ==========================
  @Get('/estacion/:id')
  findByEstacion(@Param('id', ParseIntPipe) id: number) {
    return this.bitacoraService.findByEstacion(id);
  }
}
