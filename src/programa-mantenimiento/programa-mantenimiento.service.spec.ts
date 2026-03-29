import { Test, TestingModule } from '@nestjs/testing';
import { ProgramaMantenimientoService } from './programa-mantenimiento.service';

describe('ProgramaMantenimientoService', () => {
  let service: ProgramaMantenimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramaMantenimientoService],
    }).compile();

    service = module.get<ProgramaMantenimientoService>(ProgramaMantenimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
