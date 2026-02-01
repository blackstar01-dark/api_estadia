import { Test, TestingModule } from '@nestjs/testing';
import { PersonalautorizadoService } from './personalautorizado.service';

describe('PersonalautorizadoService', () => {
  let service: PersonalautorizadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalautorizadoService],
    }).compile();

    service = module.get<PersonalautorizadoService>(PersonalautorizadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
