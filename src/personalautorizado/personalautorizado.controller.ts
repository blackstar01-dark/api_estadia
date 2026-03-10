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
  UseGuards,
  Req,
} from '@nestjs/common';
import { PersonalautorizadoService } from './personalautorizado.service';
import { CreatePersonaAutorizadaDto } from './dto/create-personalautorizado.dto';
import { UpdatePersonalautorizadoDto } from './dto/update-personalautorizado.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JwtCookieGuard } from 'src/auth/guards/jwt-cookie.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('personalautorizado')
export class PersonalautorizadoController {
  constructor(
    private readonly personalAutorizadoService: PersonalautorizadoService,
  ) {}

  // ==========================
  // CREATE
  // ==========================
  @Post()
  @UseGuards(JwtCookieGuard, RolesGuard )
  @Roles('ADMIN')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreatePersonaAutorizadaDto, @Req() req) {
    return this.personalAutorizadoService.create(dto, req.user.id);
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
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
