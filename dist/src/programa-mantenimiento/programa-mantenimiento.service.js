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
exports.ProgramaMantenimientoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProgramaMantenimientoService = class ProgramaMantenimientoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.programaMantenimiento.findMany({
            where: { activo: true },
            include: {
                estacion: true,
                plantilla: true,
            },
            orderBy: {
                fechaInicio: 'desc',
            },
        });
    }
    async findByEstacion(estacionId) {
        if (!estacionId) {
            throw new common_1.NotFoundException('Estacion inválida');
        }
        return this.prisma.programaMantenimiento.findMany({
            where: {
                estacionId,
                activo: true,
            },
            include: {
                plantilla: true,
            },
            orderBy: {
                fechaInicio: 'desc',
            },
        });
    }
    async findOne(id) {
        const programa = await this.prisma.programaMantenimiento.findUnique({
            where: { id },
            include: {
                estacion: true,
                plantilla: true,
                mantenimientos: true,
            },
        });
        if (!programa) {
            throw new common_1.NotFoundException('Programa de mantenimiento no encontrado');
        }
        return programa;
    }
    async create(dto) {
        const exists = await this.prisma.programaMantenimiento.findFirst({
            where: {
                estacionId: dto.estacionId,
                plantillaId: dto.plantillaId,
            },
        });
        if (exists) {
            throw new common_1.ConflictException('Ya existe un programa para esta estación y plantilla');
        }
        return this.prisma.programaMantenimiento.create({
            data: {
                estacionId: dto.estacionId,
                plantillaId: dto.plantillaId,
                activo: dto.activo ?? true,
                fechaInicio: dto.fechaInicio ?? new Date(),
            },
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.programaMantenimiento.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.programaMantenimiento.update({
            where: { id },
            data: { activo: false },
        });
    }
};
exports.ProgramaMantenimientoService = ProgramaMantenimientoService;
exports.ProgramaMantenimientoService = ProgramaMantenimientoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProgramaMantenimientoService);
//# sourceMappingURL=programa-mantenimiento.service.js.map