import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlantillaMantenimientoDto } from './dto/create-plantilla-mantenimiento.dto';
import { UpdatePlantillaMantenimientoDto } from './dto/update-plantilla-mantenimiento.dto';

@Injectable()
export class PlantillaMantenimientoService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔓 Público
  async findAll() {
    return this.prisma.plantillaMantenimiento.findMany({
      where: { activa: true },
      orderBy: { numeralNom: 'asc' },
    });
  }

  async findOne(id: number) {
    const plantilla = await this.prisma.plantillaMantenimiento.findUnique({
      where: { id },
    });

    if (!plantilla) {
      throw new NotFoundException('Plantilla no encontrada');
    }

    return plantilla;
  }

  // 🔐 ADMIN
  async create(dto: CreatePlantillaMantenimientoDto) {
    const exists = await this.prisma.plantillaMantenimiento.findFirst({
      where: {
        numeralNom: dto.numeralNom,
        actividad: dto.actividad,
      },
    });

    if (exists) {
      throw new ConflictException('La plantilla ya existe');
    }

    return this.prisma.plantillaMantenimiento.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdatePlantillaMantenimientoDto) {
    await this.findOne(id);

    return this.prisma.plantillaMantenimiento.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.plantillaMantenimiento.delete({
      where: { id },
    });
  }
}
