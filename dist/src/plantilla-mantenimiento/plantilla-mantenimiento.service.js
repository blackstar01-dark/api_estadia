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
exports.PlantillaMantenimientoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlantillaMantenimientoService = class PlantillaMantenimientoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.plantillaMantenimiento.findMany({
            where: { activa: true },
            orderBy: { numeralNom: 'asc' },
        });
    }
    async findOne(id) {
        const plantilla = await this.prisma.plantillaMantenimiento.findUnique({
            where: { id },
        });
        if (!plantilla) {
            throw new common_1.NotFoundException('Plantilla no encontrada');
        }
        return plantilla;
    }
    async create(dto) {
        const exists = await this.prisma.plantillaMantenimiento.findFirst({
            where: {
                numeralNom: dto.numeralNom,
                actividad: dto.actividad,
            },
        });
        if (exists) {
            throw new common_1.ConflictException('La plantilla ya existe');
        }
        return this.prisma.plantillaMantenimiento.create({
            data: dto,
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.plantillaMantenimiento.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.plantillaMantenimiento.delete({
            where: { id },
        });
    }
};
exports.PlantillaMantenimientoService = PlantillaMantenimientoService;
exports.PlantillaMantenimientoService = PlantillaMantenimientoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlantillaMantenimientoService);
//# sourceMappingURL=plantilla-mantenimiento.service.js.map