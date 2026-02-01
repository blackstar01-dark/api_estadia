import { Test, TestingModule } from '@nestjs/testing';
import { PersonalautorizadoController } from './personalautorizado.controller';
import { PersonalautorizadoService } from './personalautorizado.service';

describe('PersonalautorizadoController', () => {
  let controller: PersonalautorizadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalautorizadoController],
      providers: [PersonalautorizadoService],
    }).compile();

    controller = module.get<PersonalautorizadoController>(PersonalautorizadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
