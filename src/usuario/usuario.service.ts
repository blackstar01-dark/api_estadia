import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUsuarioDto) {
    const exists = await this.prisma.usuario.findUnique({
      where: { correo: dto.correo },
    });

    if (exists) {
      throw new ConflictException('Correo ya registrado');
    }

    const saltRounds = Number(process.env.BCRYPT_ROUNDS) || 12;
    const contrasenaHash = await bcrypt.hash(dto.contrasena, saltRounds);

    return this.prisma.usuario.create({
      data: {
        nombre: dto.nombre,
        correo: dto.correo,
        contrasenaHash,
        rol: dto.rol ?? 'OPERADOR',
      },
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
        createdAt: true,
      },
    });
  }

  async validateUser(correo: string, contrasena: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { correo },
    });

    if (!user) return null;

    const match = await bcrypt.compare(contrasena, user.contrasenaHash);
    if (!match) return null;

    return {
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      rol: user.rol,
    };
  }

  async findById(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }

  async findAll() {
    return this.prisma.usuario.findMany({
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
        createdAt: true,
      },
    });
  }

  async update(id: number, dto: UpdateUsuarioDto) {
    await this.findById(id);

    const data: Prisma.UsuarioUpdateInput = {};
    const saltRounds = Number(process.env.BCRYPT_ROUNDS) || 12;

    if (dto.nombre) data.nombre = dto.nombre;

    if (dto.correo) {
      const exists = await this.prisma.usuario.findUnique({
        where: { correo: dto.correo },
      });

      if (exists && exists.id !== id) {
        throw new ConflictException('Correo ya registrado');
      }

      data.correo = dto.correo;
    }

    if (dto.rol) data.rol = dto.rol;

    if (dto.contrasena) {
      data.contrasenaHash = await bcrypt.hash(dto.contrasena, saltRounds);
    }

    return this.prisma.usuario.update({
      where: { id },
      data,
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
        createdAt: true,
      },
    });
  }

  async remove(id: number) {
    await this.findById(id);

    return this.prisma.usuario.delete({
      where: { id },
      select: {
        id: true,
        nombre: true,
        correo: true,
        rol: true,
      },
    });
  }
}
