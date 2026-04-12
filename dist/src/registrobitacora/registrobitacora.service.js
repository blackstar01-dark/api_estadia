"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroBitacoraService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
let RegistroBitacoraService = class RegistroBitacoraService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    resolverPeriodicidad(tipo, dto) {
        switch (tipo) {
            case 'OPERACION_MANTENIMIENTO':
                if (!dto.periodicidad) {
                    throw new common_1.BadRequestException('La periodicidad es obligatoria para mantenimiento');
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
    async create(dto, personalId) {
        if (!personalId) {
            throw new common_1.ConflictException('Id personal es obligatorio');
        }
        const persona = await this.prisma.personaAutorizada.findUnique({
            where: { id: personalId },
        });
        if (!persona) {
            throw new common_1.NotFoundException('Personal no autorizado');
        }
        const bitacora = await this.prisma.bitacora.findUnique({
            where: { id: dto.bitacoraId },
        });
        if (!bitacora) {
            throw new common_1.NotFoundException('Bitácora no encontrada');
        }
        return this.prisma.$transaction(async (tx) => {
            const lastRegistro = await tx.registroBitacora.findFirst({
                where: { bitacoraId: dto.bitacoraId },
                orderBy: { folio: 'desc' },
            });
            const nextFolio = lastRegistro ? lastRegistro.folio + 1 : 1;
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
            if (bitacora.tipo === 'OPERACION_MANTENIMIENTO') {
                if (!dto.programaId) {
                    throw new common_1.BadRequestException('programaId es requerido');
                }
                if (!dto.tipoMantenimiento) {
                    throw new common_1.BadRequestException('tipoMantenimiento es requerido');
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
                    throw new common_1.NotFoundException('Programa de mantenimiento no encontrado');
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
            if (bitacora.tipo === 'DESCARGA_PIPAS') {
                if (!dto.numeroPipa ||
                    !dto.producto ||
                    dto.volumenRecibido === undefined ||
                    !dto.proveedor) {
                    throw new common_1.BadRequestException('Datos de descarga incompletos');
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
    async findAll(page = 1, limit = 20) {
        if (page < 1 || limit < 1) {
            throw new common_1.BadRequestException('Parámetros inválidos');
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
    async findByPersonal(personalId) {
        if (!personalId) {
            throw new common_1.BadRequestException('Id personal inválido');
        }
        return this.prisma.registroBitacora.findMany({
            where: { personaId: personalId },
            orderBy: { fechaHora: 'desc' },
            include: {
                bitacora: { select: { id: true, tipo: true } },
            },
        });
    }
    async findByBitacora(bitacoraId) {
        if (!bitacoraId || bitacoraId < 1) {
            throw new common_1.BadRequestException('ID de bitácora inválido');
        }
        const bitacoraExists = await this.prisma.bitacora.findUnique({
            where: { id: bitacoraId },
        });
        if (!bitacoraExists) {
            throw new common_1.NotFoundException('Bitácora no encontrada');
        }
        return this.prisma.registroBitacora.findMany({
            where: { bitacoraId },
            orderBy: { fechaHora: 'desc' },
            include: {
                persona: { select: { id: true, nombre: true } },
                bitacora: { select: { id: true, tipo: true } },
            },
        });
    }
    async findOne(id) {
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
            throw new common_1.NotFoundException('Registro de bitácora no encontrado');
        }
        return registro;
    }
    async update(id, dto) {
        try {
            return await this.prisma.registroBitacora.update({
                where: { id },
                data: dto,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Registro de bitácora no encontrado');
            }
            this.handlePrismaError(error);
        }
    }
    async remove(id) {
        try {
            return await this.prisma.registroBitacora.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Registro de bitácora no encontrado');
            }
            this.handlePrismaError(error);
        }
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('Registro duplicado');
            }
        }
        throw error;
    }
};
exports.RegistroBitacoraService = RegistroBitacoraService;
exports.RegistroBitacoraService = RegistroBitacoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegistroBitacoraService);
//# sourceMappingURL=registrobitacora.service.js.map