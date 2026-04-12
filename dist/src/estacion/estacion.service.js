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
exports.EstacionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EstacionService = class EstacionService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllPublic() {
        return this.prisma.estacion.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async count() {
        return this.prisma.estacion.count();
    }
    async findByPersonal(personalId) {
        if (!personalId) {
            throw new common_1.BadRequestException('Id personal inválido');
        }
        return this.prisma.estacion.findMany({
            where: {
                personas: {
                    some: {
                        id: personalId,
                    },
                },
            },
            include: {
                personas: true,
            },
        });
    }
    async findOnePublic(id) {
        const estacion = await this.prisma.estacion.findUnique({ where: { id } });
        if (!estacion)
            throw new common_1.NotFoundException('Estación no encontrada');
        return estacion;
    }
    async findAll(adminId) {
        return this.prisma.estacion.findMany({
            where: { adminId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, adminId) {
        const estacion = await this.prisma.estacion.findFirst({
            where: { id, adminId },
        });
        if (!estacion)
            throw new common_1.NotFoundException('Estación no encontrada');
        return estacion;
    }
    async create(dto, adminId) {
        if (!adminId)
            throw new common_1.ConflictException('adminId es obligatorio');
        const exists = await this.prisma.estacion.findUnique({
            where: { permisoCRE: dto.permisoCRE },
        });
        if (exists)
            throw new common_1.ConflictException('La estación ya existe');
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
                        estacionId: nuevaEstacion.id,
                    },
                    {
                        tipo: 'OPERACION_MANTENIMIENTO',
                        estacionId: nuevaEstacion.id,
                    },
                ],
            });
            return nuevaEstacion;
        });
    }
    async update(id, dto, adminId) {
        await this.findOne(id, adminId);
        return this.prisma.estacion.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id, adminId) {
        await this.findOne(id, adminId);
        return this.prisma.estacion.delete({ where: { id } });
    }
};
exports.EstacionService = EstacionService;
exports.EstacionService = EstacionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EstacionService);
//# sourceMappingURL=estacion.service.js.map