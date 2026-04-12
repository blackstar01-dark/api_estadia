"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UsuarioService = class UsuarioService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.usuario.findUnique({
            where: { correo: dto.correo },
        });
        if (exists) {
            throw new common_1.ConflictException('Correo ya registrado');
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
    async validateUser(correo, contrasena) {
        const user = await this.prisma.usuario.findUnique({
            where: { correo },
        });
        if (!user)
            return null;
        const match = await bcrypt.compare(contrasena, user.contrasenaHash);
        if (!match)
            return null;
        return {
            id: user.id,
            nombre: user.nombre,
            correo: user.correo,
            rol: user.rol,
        };
    }
    async findById(id) {
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
            throw new common_1.NotFoundException('Usuario no encontrado');
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
    async update(id, dto) {
        await this.findById(id);
        const data = {};
        const saltRounds = Number(process.env.BCRYPT_ROUNDS) || 12;
        if (dto.nombre)
            data.nombre = dto.nombre;
        if (dto.correo) {
            const exists = await this.prisma.usuario.findUnique({
                where: { correo: dto.correo },
            });
            if (exists && exists.id !== id) {
                throw new common_1.ConflictException('Correo ya registrado');
            }
            data.correo = dto.correo;
        }
        if (dto.rol)
            data.rol = dto.rol;
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
    async remove(id) {
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
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map