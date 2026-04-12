import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUsuarioDto): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
        createdAt: Date;
    }>;
    validateUser(correo: string, contrasena: string): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
    } | null>;
    findById(id: number): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
        createdAt: Date;
    }[]>;
    update(id: number, dto: UpdateUsuarioDto): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("generated/prisma/client").RolUsuario;
    }>;
}
