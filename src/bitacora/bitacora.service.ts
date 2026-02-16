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
        registros: {
          select: {
            id: true,
            folio: true,
            fechaHora: true,
          },
        },
      },
    });
  }

  // ==========================
  // FIND ONE
  // ==========================
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
          orderBy: { fechaHora: 'desc' },
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
  // UPDATE (RESTRINGIDO)
  // ==========================
  async update(id: number, dto: UpdateBitacoraDto) {
    if (!dto.fundamento) {
      throw new BadRequestException(
        'Solo se permite actualizar el fundamento legal',
      );
    }

    try {
      return await this.prisma.bitacora.update({
        where: { id },
        data: {
          fundamento: dto.fundamento,
        },
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

  // ==========================
  // DELETE (PROHIBIDO POR NOM)
  // ==========================
  async remove() {
    throw new BadRequestException(
      'Las bitácoras no pueden eliminarse por cumplimiento de la NOM-005-ASEA-2016',
    );
  }

  // ==========================
  // PRISMA ERROR HANDLER
  // ==========================
  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'La bitácora ya existe para esta estación y tipo',
        );
      }
    }
    throw error;
  }
}
