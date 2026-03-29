import { Test, TestingModule } from '@nestjs/testing';
import { PlantillaMantenimientoController } from './plantilla-mantenimiento.controller';
import { PlantillaMantenimientoService } from './plantilla-mantenimiento.service';

describe('PlantillaMantenimientoController', () => {
  let controller: PlantillaMantenimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantillaMantenimientoController],
      providers: [PlantillaMantenimientoService],
    }).compile();

    controller = module.get<PlantillaMantenimientoController>(PlantillaMantenimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
