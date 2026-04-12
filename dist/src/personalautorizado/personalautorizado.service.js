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
exports.PersonalautorizadoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
const crypto = __importStar(require("crypto"));
let PersonalautorizadoService = class PersonalautorizadoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        const estacion = await this.prisma.estacion.findFirst({
            where: {
                id: dto.estacionId,
                adminId: userId,
            },
        });
        if (!estacion) {
            throw new common_1.NotFoundException('Estación no encontrada');
        }
        const exists = await this.prisma.personaAutorizada.findFirst({
            where: {
                nombre: dto.nombre,
                estacionId: dto.estacionId,
            },
        });
        if (exists) {
            throw new common_1.ConflictException('La persona autorizada ya existe en esta estación');
        }
        const firmaHash = crypto
            .createHash('sha256')
            .update(dto.firmaHashPersona)
            .digest('hex');
        return this.prisma.personaAutorizada.create({
            data: {
                nombre: dto.nombre,
                cargo: dto.cargo,
                firmaHashPersona: firmaHash,
                estacionId: dto.estacionId,
                creadoPorId: userId,
            },
        });
    }
    async validatePersonal(nombre, firma) {
        if (!firma)
            return null;
        const persona = await this.prisma.personaAutorizada.findFirst({
            where: { nombre },
        });
        if (!persona)
            return null;
        const firmaHash = crypto.createHash('sha256').update(firma).digest('hex');
        if (persona.firmaHashPersona !== firmaHash)
            return null;
        return persona;
    }
    async count() {
        return this.prisma.personaAutorizada.count();
    }
    async findAll(page = 1, limit = 20) {
        if (page < 1 || limit < 1) {
            throw new common_1.BadRequestException('Parámetros inválidos');
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
                creadoPor: {
                    select: {
                        id: true,
                        nombre: true,
                        correo: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
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
            throw new common_1.NotFoundException('Persona autorizada no encontrada');
        }
        return persona;
    }
    async update(id, dto) {
        try {
            return await this.prisma.personaAutorizada.update({
                where: { id },
                data: dto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Persona autorizada no encontrada');
            }
            this.handlePrismaError(error);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.personaAutorizada.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Persona autorizada no encontrada');
            }
            this.handlePrismaError(error);
        }
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Violación de restricción única');
            }
        }
        throw error;
    }
};
exports.PersonalautorizadoService = PersonalautorizadoService;
exports.PersonalautorizadoService = PersonalautorizadoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonalautorizadoService);
//# sourceMappingURL=personalautorizado.service.js.map