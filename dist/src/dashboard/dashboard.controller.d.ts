import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): Promise<{
        totalBitacoras: number;
        totalEstacion: number;
        totalPersonal: number;
    }>;
}
