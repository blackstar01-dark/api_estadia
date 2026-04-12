import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(dto: CreateUsuarioDto): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }>;
    update(id: number, dto: UpdateUsuarioDto): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums").RolUsuario;
    }>;
}
