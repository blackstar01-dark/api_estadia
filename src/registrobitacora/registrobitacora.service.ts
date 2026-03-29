import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroBitacoraDto } from './dto/create-registrobitacora.dto';
import { UpdateRegistroBitacoraDto } from './dto/update-registrobitacora.dto';
import { Prisma, PeriodicidadBitacora } from 'generated/prisma/client';

@Injectable()
export class RegistroBitacoraService {
  constructor(private readonly prisma: PrismaService) {}

  // ==========================
  // 🔥 LÓGICA CENTRALIZADA
  // ==========================
  private resolverPeriodicidad(
    tipo: string,
    dto: CreateRegistroBitacoraDto,
  ): PeriodicidadBitacora | null {
    switch (tipo) {
      case 'OPERACION_MANTENIMIENTO':
        if (!dto.periodicidad) {
          throw new BadRequestException(
            'La periodicidad es obligatoria para mantenimiento',
          );
        }
        return dto.periodicidad;

      case 'DESCARGA_PIPAS':
        return dto.periodicidad ?? 'DIARIA';

      case 'OTRO':
        return dto.periodicidad ?? null;

      default:
        return null;
    }
  }

  // ==========================
  // CREATE
  // ==========================
  async create(dto: CreateRegistroBitacoraDto, personalId: number) {
    if (!personalId) {
      throw new ConflictException('Id personal es obligatorio');
    }

    const persona = await this.prisma.personaAutorizada.findUnique({
      where: { id: personalId },
    });

    if (!persona) {
      throw new NotFoundException('Personal no autorizado');
    }

    const bitacora = await this.prisma.bitacora.findUnique({
      where: { id: dto.bitacoraId },
    });

    if (!bitacora) {
      throw new NotFoundException('Bitácora no encontrada');
    }

    return this.prisma.$transaction(async (tx) => {
      // ======================
      // FOLIO AUTOMÁTICO
      // ======================
      const lastRegistro = await tx.registroBitacora.findFirst({
        where: { bitacoraId: dto.bitacoraId },
        orderBy: { folio: 'desc' },
      });

      const nextFolio = lastRegistro ? lastRegistro.folio + 1 : 1;

      // ======================
      // 🔥 RESOLVER PERIODICIDAD
      // ======================
      const periodicidadFinal = this.resolverPeriodicidad(bitacora.tipo, dto);

      const registro = await tx.registroBitacora.create({
        data: {
          folio: nextFolio,
          descripcion: dto.descripcion,
          firmaHashRegistro: dto.firmaHashRegistro,
          personaId: personalId,
          bitacoraId: dto.bitacoraId,
          estacionId: dto.estacionId,
          periodicidad: periodicidadFinal,
        },
      });

      // ======================
      // MANTENIMIENTO
      // ======================
      if (bitacora.tipo === 'OPERACION_MANTENIMIENTO') {
        if (!dto.programaId) {
          throw new BadRequestException('programaId es requerido');
        }

        if (!dto.tipoMantenimiento) {
          throw new BadRequestException('tipoMantenimiento es requerido');
        }

        const programa = await tx.programaMantenimiento.findFirst({
          where: {
            id: dto.programaId,
            estacionId: dto.estacionId,
          },
          include: {
            plantilla: true,
          },
        });

        if (!programa) {
          throw new NotFoundException(
            'Programa de mantenimiento no encontrado',
          );
        }

        await tx.mantenimiento.create({
          data: {
            registroId: registro.id,
            tipo: dto.tipoMantenimiento,
            actividad: programa.plantilla.actividad,
            observaciones: dto.observaciones,
            programaId: programa.id,
          },
        });
      }

      // ======================
      // DESCARGA PIPA
      // ======================
      if (bitacora.tipo === 'DESCARGA_PIPAS') {
        if (
          !dto.numeroPipa ||
          !dto.producto ||
          dto.volumenRecibido === undefined ||
          !dto.proveedor
        ) {
          throw new BadRequestException('Datos de descarga incompletos');
        }

        await tx.descargaPipa.create({
          data: {
            registroId: registro.id,
            numeroPipa: dto.numeroPipa,
            producto: dto.producto,
            volumenRecibido: dto.volumenRecibido,
            proveedor: dto.proveedor,
          },
        });
      }

      return registro;
    });
  }

  // ==========================
  // FIND ALL
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
  // FIND BY PERSONAL
  // ==========================
  async findByPersonal(personalId: number) {
    if (!personalId) {
      throw new BadRequestException('Id personal inválido');
    }

    return this.prisma.registroBitacora.findMany({
      where: { personaId: personalId },
      orderBy: { fechaHora: 'desc' },
      include: {
        bitacora: { select: { id: true, tipo: true } },
      },
    });
  }

  // ==========================
  // FIND BY BITACORA
  // ==========================
  async findByBitacora(bitacoraId: number) {
    if (!bitacoraId || bitacoraId < 1) {
      throw new BadRequestException('ID de bitácora inválido');
    }

    const bitacoraExists = await this.prisma.bitacora.findUnique({
      where: { id: bitacoraId },
    });

    if (!bitacoraExists) {
      throw new NotFoundException('Bitácora no encontrada');
    }

    return this.prisma.registroBitacora.findMany({
      where: { bitacoraId },
      orderBy: { fechaHora: 'desc' },
      include: {
        persona: {
          select: { id: true, nombre: true },
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
  // ERROR HANDLER
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
