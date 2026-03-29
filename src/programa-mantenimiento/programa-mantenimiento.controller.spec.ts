import { Test, TestingModule } from '@nestjs/testing';
import { ProgramaMantenimientoController } from './programa-mantenimiento.controller';
import { ProgramaMantenimientoService } from './programa-mantenimiento.service';

describe('ProgramaMantenimientoController', () => {
  let controller: ProgramaMantenimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramaMantenimientoController],
      providers: [ProgramaMantenimientoService],
    }).compile();

    controller = module.get<ProgramaMantenimientoController>(ProgramaMantenimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
