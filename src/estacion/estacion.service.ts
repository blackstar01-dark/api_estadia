import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';
import { NotFoundException, ConflictException } from '@nestjs/common';

@Injectable()
export class EstacionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.estacion.findMany();
  }

  async findOne(id: number) {
    const existe = await this.prisma.estacion.findUnique({
      where: {
        id,
      },
    });
    if (!existe) {
      throw new NotFoundException('Estacion no encontrada');
    }
    return existe;
  }

  async create(createEstacionDto: CreateEstacionDto) {
    const existeEstacion = await this.prisma.estacion.findUnique({
      where: {
        permisoCRE: createEstacionDto.permisoCRE,
      },
    });
    if (existeEstacion) {
      throw new ConflictException('La estacion ya existe');
    }

    return await this.prisma.estacion.create({
      data: createEstacionDto,
    });
  }

  async update(id: number, updateEstacionDto: UpdateEstacionDto) {
    try {
      return await this.prisma.estacion.update({
        where: {
          id,
        },
        data: updateEstacionDto,
      });
    } catch {
      throw new ConflictException('Error al actualizar la estacion');
    }
  }

  async remove(id: number) {
    const existe = await this.prisma.estacion.findUnique({
      where: {
        id,
      },
    });
    if (!existe) {
      throw new NotFoundException('Estacion no encontrada');
    }
    return await this.prisma.estacion.delete({
      where: {
        id,
      },
    });
  }
}
