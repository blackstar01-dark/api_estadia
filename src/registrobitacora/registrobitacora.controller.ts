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
} from '@nestjs/common';
import { RegistroBitacoraService } from './registrobitacora.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import { JwtAuthGuardPersonal } from 'src/authpersonal/guards/jwt-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';

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
  create(@Body() dto: CreateRegistroBitacoraDto, @Req() req: any) {
    const personalID = req.user.id;
    return this.registroBitacoraService.create(dto, personalID);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 20,
  ) {
    return this.registroBitacoraService.findAll(page, limit);
  }

  // ==========================
  // FIND ONE
  // ==========================
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.registroBitacoraService.findOne(id);
  }

  // ==========================
  // FIND BY BITACORA
  // ==========================
  @Get('bitacora/:id')
  @UseGuards(JwtAuthGuard)
  findByBitacora(@Param('id', ParseIntPipe) id: number) {
    return this.registroBitacoraService.findByBitacora(id)
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
