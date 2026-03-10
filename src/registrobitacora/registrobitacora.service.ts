import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class RegistroBitacoraService {
  constructor(private readonly prisma: PrismaService) {}

  // ==========================
  // CREATE
  // ==========================
  async create(dto: CreateRegistroBitacoraDto, personalId: number) {
    if(!personalId) {
      throw new ConflictException("Id personal es obligatorio");
    }

    const persona = await this.prisma.personaAutorizada.findUnique({
      where: { id: personalId },
    });

    if(!persona) {
      throw new NotFoundException('Personal no autorizado');
    }

    const bitacora = await this.prisma.bitacora.findUnique({
      where: { id: dto.bitacoraId },
    });

    if (!bitacora) {
      throw new NotFoundException('Bitácora no encontrada')
    }

    const exists = await this.prisma.registroBitacora.findFirst({
      where: {
        bitacoraId: dto.bitacoraId,
        folio: dto.folio,
      },
    });

    if (exists) {
      throw new ConflictException('El folio ya existe para esta bitácora')
    }

    try {
      return await this.prisma.registroBitacora.create({
        data: {
          folio: dto.folio,
          descripcion: dto.descripcion,
          firmaHashRegistro: dto.firmaHashRegistro,
          personaId: personalId,
          bitacoraId: dto.bitacoraId,
          estacionId: dto.estacionId,
          periodicidad: dto.periodicidad,
        },
      });
    } catch (error) {
      this.handlePrismaError(error)
    }
  }

  // ==========================
  // FIND ALL (PAGINADO)
  // ==========================
  async findAll(page = 1, limit = 20) {
    if (page < 1 || limit < 1) {
      throw new BadRequestException('Parámetros inválidos');
    }

    return this.prisma.registroBitacora.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { fechaHora: 'desc' },
      include: {
        persona: { select: { id: true, nombre: true } },
        bitacora: { select: { id: true, tipo: true } },
      },
    });
  }

  // ==========================
  // FIND BY BITACORA
  // ==========================
  async findByBitacora(bitacoraId: number) {
    if(!bitacoraId || bitacoraId < 1) {
      throw new BadRequestException('ID de bitácora inválido');
    }

    const bitacoraExists = await this.prisma.bitacora.findUnique({
      where: { id: bitacoraId},
    });

    if (!bitacoraExists) {
      throw new NotFoundException('Bitácora no encontrada');
    }

    return this.prisma.registroBitacora.findMany({
      where: { bitacoraId },
      orderBy: { fechaHora: 'desc'},
      include: {
        persona: {
          select: { id: true, nombre: true}
        },
      },
    });
  }

  // ==========================
  // FIND ONE
  // ==========================
  async findOne(id: number) {
    const registro = await this.prisma.registroBitacora.findUnique({
      where: { id },
      include: {
        persona: { select: { id: true, nombre: true } },
        bitacora: { select: { id: true, tipo: true } },
        descargaPipa: true,
        mantenimiento: true,
      },
    });

    if (!registro) {
      throw new NotFoundException('Registro de bitácora no encontrado');
    }

    return registro;
  }

  // ==========================
  // UPDATE
  // ==========================
  async update(id: number, dto: UpdateRegistroBitacoraDto) {
    try {
      return await this.prisma.registroBitacora.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Registro de bitácora no encontrado');
      }
      this.handlePrismaError(error);
    }
  }

  // ==========================
  // DELETE
  // ==========================
  async remove(id: number) {
    try {
      return await this.prisma.registroBitacora.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Registro de bitácora no encontrado');
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
        throw new ConflictException('Registro duplicado');
      }
    }
    throw error;
  }
}
