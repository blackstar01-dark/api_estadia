import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('usuario')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // ==========================
  // Crear usuario (ADMIN)
  // ==========================
  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }
  // ==========================
  // Listar usuarios (ADMIN)
  // ==========================
  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.usuarioService.findAll();
  }

  // ==========================
  // Obtener usuario por ID
  // ==========================
  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findById(id);
  }

  // ==========================
  // Actualizar usuario
  // ==========================
  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, dto);
  }

  // ==========================
  // Eliminar usuario (ADMIN)
  // ==========================
  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.remove(id);
  }
}
