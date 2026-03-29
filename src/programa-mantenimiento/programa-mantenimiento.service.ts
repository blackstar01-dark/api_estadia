import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProgramaMantenimientoDto } from './dto/create-programa-mantenimiento.dto';
import { UpdateProgramaMantenimientoDto } from './dto/update-programa-mantenimiento.dto';

@Injectable()
export class ProgramaMantenimientoService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔓 Obtener todos
  async findAll() {
    return this.prisma.programaMantenimiento.findMany({
      where: { activo: true },
      include: {
        estacion: true,
        plantilla: true,
      },
      orderBy: {
        fechaInicio: 'desc',
      },
    });
  }

  async findByEstacion(estacionId: number) {
    if (!estacionId) {
      throw new NotFoundException('Estacion inválida');
    }

    return this.prisma.programaMantenimiento.findMany({
      where: {
        estacionId,
        activo: true,
      },
      include: {
        plantilla: true,
      },
      orderBy: {
        fechaInicio: 'desc',
      },
    });
  }

  // 🔓 Obtener uno
  async findOne(id: number) {
    const programa = await this.prisma.programaMantenimiento.findUnique({
      where: { id },
      include: {
        estacion: true,
        plantilla: true,
        mantenimientos: true,
      },
    });

    if (!programa) {
      throw new NotFoundException('Programa de mantenimiento no encontrado');
    }

    return programa;
  }

  // 🔐 Crear
  async create(dto: CreateProgramaMantenimientoDto) {
    const exists = await this.prisma.programaMantenimiento.findFirst({
      where: {
        estacionId: dto.estacionId,
        plantillaId: dto.plantillaId,
      },
    });

    if (exists) {
      throw new ConflictException(
        'Ya existe un programa para esta estación y plantilla',
      );
    }

    return this.prisma.programaMantenimiento.create({
      data: {
        estacionId: dto.estacionId,
        plantillaId: dto.plantillaId,
        activo: dto.activo ?? true,
        fechaInicio: dto.fechaInicio ?? new Date(),
      },
    });
  }

  // 🔐 Actualizar
  async update(id: number, dto: UpdateProgramaMantenimientoDto) {
    await this.findOne(id);

    return this.prisma.programaMantenimiento.update({
      where: { id },
      data: dto,
    });
  }

  // 🔐 Eliminar (soft delete)
  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.programaMantenimiento.update({
      where: { id },
      data: { activo: false },
    });
  }
}
