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
exports.BitacoraService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
let BitacoraService = class BitacoraService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(page = 1, limit = 20) {
        if (page < 1 || limit < 1) {
            throw new common_1.BadRequestException('Parámetros inválidos');
        }
        return this.prisma.bitacora.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                estacion: {
                    select: {
                        id: true,
                        nombre: true,
                        permisoCRE: true,
                    },
                },
                registros: {
                    select: {
                        id: true,
                        folio: true,
                        fechaHora: true,
                    },
                },
            },
        });
    }
    async findByPersonal(personalId) {
        const personal = await this.prisma.personaAutorizada.findUnique({
            where: { id: personalId },
            select: { estacionId: true },
        });
        if (!personal) {
            throw new common_1.NotFoundException('Personal no encontrado');
        }
        return this.prisma.bitacora.findMany({
            where: { estacionId: personal.estacionId },
            orderBy: { createdAt: 'desc' },
            include: {
                estacion: { select: { id: true, nombre: true, permisoCRE: true } },
                registros: {
                    orderBy: { fechaHora: 'desc' },
                    include: {
                        persona: { select: { id: true, nombre: true, cargo: true } },
                    },
                },
            },
        });
    }
    async count() {
        return this.prisma.bitacora.count();
    }
    async findByEstacion(estacionId) {
        if (!estacionId || estacionId < 1) {
            throw new common_1.BadRequestException('ID de estacion inválido');
        }
        return this.prisma.bitacora.findMany({
            where: {
                estacionId: estacionId,
            },
            orderBy: { createdAt: 'desc' },
            include: {
                estacion: {
                    select: {
                        id: true,
                        nombre: true,
                        permisoCRE: true,
                    },
                },
                registros: {
                    orderBy: { fechaHora: 'desc' },
                    include: {
                        persona: {
                            select: {
                                id: true,
                                nombre: true,
                                cargo: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findByTipo(tipo) {
        if (!Object.values(client_1.TipoBitacora).includes(tipo)) {
            throw new common_1.BadRequestException('Tipo de bitácora inválida');
        }
        return this.prisma.bitacora.findMany({
            where: {
                tipo: tipo,
            },
            orderBy: { createdAt: 'desc' },
            include: {
                estacion: {
                    select: {
                        id: true,
                        nombre: true,
                        permisoCRE: true,
                    },
                },
                registros: {
                    orderBy: { fechaHora: 'desc' },
                    include: {
                        persona: {
                            select: {
                                id: true,
                                nombre: true,
                                cargo: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async findOne(id) {
        const bitacora = await this.prisma.bitacora.findUnique({
            where: { id },
            include: {
                estacion: {
                    select: {
                        id: true,
                        nombre: true,
                        permisoCRE: true,
                    },
                },
                registros: {
                    orderBy: { fechaHora: 'desc' },
                    include: {
                        persona: {
                            select: {
                                id: true,
                                nombre: true,
                                cargo: true,
                            },
                        },
                    },
                },
            },
        });
        if (!bitacora) {
            throw new common_1.NotFoundException('Bitácora no encontrada');
        }
        return bitacora;
    }
    async update(id, dto) {
        if (!dto.fundamento) {
            throw new common_1.BadRequestException('Solo se permite actualizar el fundamento legal');
        }
        try {
            return await this.prisma.bitacora.update({
                where: { id },
                data: {
                    fundamento: dto.fundamento,
                },
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('Bitácora no encontrada');
            }
            this.handlePrismaError(error);
        }
    }
    handlePrismaError(error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new common_1.ConflictException('La bitácora ya existe para esta estación y tipo');
            }
        }
        throw error;
    }
};
exports.BitacoraService = BitacoraService;
exports.BitacoraService = BitacoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BitacoraService);
//# sourceMappingURL=bitacora.service.js.map