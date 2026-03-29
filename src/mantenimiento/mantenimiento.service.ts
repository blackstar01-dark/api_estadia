import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';

@Injectable()
export class MantenimientoService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.mantenimiento.findMany({
      include: {
        registro: true,
        programa: {
          include: {
            plantilla: true,
            estacion: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const mantenimiento = await this.prisma.mantenimiento.findUnique({
      where: { id },
      include: {
        registro: true,
        programa: {
          include: {
            plantilla: true,
            estacion: true,
          },
        },
      },
    });

    if (!mantenimiento) {
      throw new NotFoundException('Mantenimiento no encontrado');
    }

    return mantenimiento;
  }

  async update(id: number, dto: UpdateMantenimientoDto) {
    await this.findOne(id);

    return this.prisma.mantenimiento.update({
      where: { id },
      data: {
        tipo: dto.tipo,
        actividad: dto.actividad,
        observaciones: dto.observaciones,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.mantenimiento.delete({
      where: { id },
    });
  }
}
