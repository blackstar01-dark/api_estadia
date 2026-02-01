import { Test, TestingModule } from '@nestjs/testing';
import { RegistrobitacoraService } from './registrobitacora.service';

describe('RegistrobitacoraService', () => {
  let service: RegistrobitacoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrobitacoraService],
    }).compile();

    service = module.get<RegistrobitacoraService>(RegistrobitacoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
