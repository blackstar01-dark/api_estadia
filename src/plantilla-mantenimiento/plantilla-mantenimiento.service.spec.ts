import { Test, TestingModule } from '@nestjs/testing';
import { PlantillaMantenimientoService } from './plantilla-mantenimiento.service';

describe('PlantillaMantenimientoService', () => {
  let service: PlantillaMantenimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantillaMantenimientoService],
    }).compile();

    service = module.get<PlantillaMantenimientoService>(PlantillaMantenimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
