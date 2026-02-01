import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class BitacoraService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBitacoraDto) {
    const estacion = await this.prisma.estacion.findUnique({
      where: { id: dto.estacionId },
    });

    if (!estacion) {
      throw new NotFoundException('Estación no encontrada');
    }

    try {
      return await this.prisma.bitacora.create({
        data: {
          tipo: dto.tipo,
          estacionId: dto.estacionId,
        },
      });
    } catch (error) {
      this.handlePrismaError(error);
    }
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  async findAll(page = 1, limit = 20) {
    if (page < 1 || limit < 1) {
      throw new BadRequestException('Parámetros inválidos');
    }

    return this.prisma.bitacora.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        estacion: {
          select: {
            id: true,
            nombre: true,
          },
        },
        registros: true,
      },
    });
  }

  async findOne(id: number) {
    const bitacora = await this.prisma.bitacora.findUnique({
      where: { id },
      include: {
        estacion: {
          select: {
            id: true,
            nombre: true,
          },
        },
        registros: {
          orderBy: {
            fechaHora: 'desc',
          },
          include: {
            persona: {
              select: {
                id: true,
                nombre: true,
                cargo: true,
              },
            },
          },
        },
      },
    });

    if (!bitacora) {
      throw new NotFoundException('Bitácora no encontrada');
    }

    return bitacora;
  }

  // ==========================
  // UPDATE
  // ==========================
  async update(id: number, dto: UpdateBitacoraDto) {
    try {
      return await this.prisma.bitacora.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Bitácora no encontrada');
      }
      this.handlePrismaError(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.bitacora.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Bitácora no encontrada');
      }
      this.handlePrismaError(error);
    }
  }

  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ConflictException('La bitácora ya existe para esta estación');
      }
    }
    throw error;
  }
}
