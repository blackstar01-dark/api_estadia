import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstacionDto } from './dto/create-estacion.dto';
import { UpdateEstacionDto } from './dto/update-estacion.dto';
import { threadId } from 'worker_threads';

@Injectable()
export class EstacionService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔓 Público
  async findAllPublic() {
    return this.prisma.estacion.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async count(): Promise<number> {
    return this.prisma.estacion.count();
  }

  async findOnePublic(id: number) {
    const estacion = await this.prisma.estacion.findUnique({ where: { id } });
    if (!estacion) throw new NotFoundException('Estación no encontrada');
    return estacion;
  }

  // 🔐 ADMIN (solo admin dueño)
  async findAll(adminId: number) {
    return this.prisma.estacion.findMany({
      where: { adminId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, adminId: number) {
    const estacion = await this.prisma.estacion.findFirst({
      where: { id, adminId },
    });
    if (!estacion) throw new NotFoundException('Estación no encontrada');
    return estacion;
  }

  async create(dto: CreateEstacionDto, adminId: number) {
    if (!adminId) throw new ConflictException('adminId es obligatorio');

    const exists = await this.prisma.estacion.findUnique({
      where: { permisoCRE: dto.permisoCRE },
    });

    if (exists) throw new ConflictException('La estación ya existe');

    return this.prisma.$transaction(async (tx) => {
      const nuevaEstacion = await tx.estacion.create({
        data: {
          ...dto,
          adminId,
        },
      });

      await tx.bitacora.createMany({
        data: [
          {
            tipo: 'ACTIVIDADES_DIARIAS',
            estacionId: nuevaEstacion.id,
          },
          {
            tipo: 'DESCARGA_PIPAS',
            estacionId: nuevaEstacion.id
          },
          {
            tipo: 'OPERACION_MANTENIMIENTO',
            estacionId: nuevaEstacion.id,
          },
        ],
      });

      return nuevaEstacion;
    })
  }

  async update(id: number, dto: UpdateEstacionDto, adminId: number) {
    await this.findOne(id, adminId);
    return this.prisma.estacion.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number, adminId: number) {
    await this.findOne(id, adminId);
    return this.prisma.estacion.delete({ where: { id } });
  }
}
