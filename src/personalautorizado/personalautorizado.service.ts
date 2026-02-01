import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaAutorizadaDto } from './dto/create-personalautorizado.dto';
import { UpdatePersonalautorizadoDto } from './dto/update-personalautorizado.dto';
import { Prisma } from '../../generated/prisma/client';

@Injectable()
export class PersonalautorizadoService {
  constructor(private readonly prisma: PrismaService) {}

  // ==========================
  // CREATE
  // ==========================
  async create(dto: CreatePersonaAutorizadaDto) {
    // Validar estación
    const estacion = await this.prisma.estacion.findUnique({
      where: { id: dto.estacionId },
    });

    if (!estacion) {
      throw new NotFoundException('Estación no encontrada');
    }

    // Validar persona única por estación
    const exists = await this.prisma.personaAutorizada.findFirst({
      where: {
        nombre: dto.nombre,
        estacionId: dto.estacionId,
      },
    });

    if (exists) {
      throw new ConflictException(
        'La persona autorizada ya existe en esta estación',
      );
    }

    try {
      return await this.prisma.personaAutorizada.create({
        data: {
          nombre: dto.nombre,
          cargo: dto.cargo,
          firmaHash: dto.firmaHash,
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

    return this.prisma.personaAutorizada.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        nombre: 'asc',
      },
      include: {
        estacion: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });
  }

  // ==========================
  // FIND ONE
  // ==========================
  async findOne(id: number) {
    const persona = await this.prisma.personaAutorizada.findUnique({
      where: { id },
      include: {
        estacion: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });

    if (!persona) {
      throw new NotFoundException('Persona autorizada no encontrada');
    }

    return persona;
  }

  // ==========================
  // UPDATE
  // ==========================
  async update(id: number, dto: UpdatePersonalautorizadoDto) {
    try {
      return await this.prisma.personaAutorizada.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Persona autorizada no encontrada');
      }
      this.handlePrismaError(error);
    }
  }

  // ==========================
  // DELETE
  // ==========================
  async remove(id: number) {
    try {
      return await this.prisma.personaAutorizada.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Persona autorizada no encontrada');
      }
      this.handlePrismaError(error);
    }
  }

  // ==========================
  // PRISMA ERROR HANDLER
  // ==========================
  private handlePrismaError(error: unknown): never {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new ConflictException('Violación de restricción única');
      }
    }
    throw error;
  }
}
