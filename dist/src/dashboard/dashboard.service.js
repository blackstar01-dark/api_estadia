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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const bitacora_service_1 = require("../bitacora/bitacora.service");
const personalautorizado_service_1 = require("../personalautorizado/personalautorizado.service");
const estacion_service_1 = require("../estacion/estacion.service");
let DashboardService = class DashboardService {
    bitacoraService;
    personalService;
    estacionService;
    constructor(bitacoraService, personalService, estacionService) {
        this.bitacoraService = bitacoraService;
        this.personalService = personalService;
        this.estacionService = estacionService;
    }
    async getStats() {
        const [totalBitacoras, totalEstacion, totalPersonal,] = await Promise.all([
            this.bitacoraService.count(),
            this.estacionService.count(),
            this.personalService.count()
        ]);
        return {
            totalBitacoras,
            totalEstacion,
            totalPersonal
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bitacora_service_1.BitacoraService,
        personalautorizado_service_1.PersonalautorizadoService,
        estacion_service_1.EstacionService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map