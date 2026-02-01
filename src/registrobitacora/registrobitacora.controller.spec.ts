import { Test, TestingModule } from '@nestjs/testing';
import { RegistrobitacoraController } from './registrobitacora.controller';
import { RegistrobitacoraService } from './registrobitacora.service';

describe('RegistrobitacoraController', () => {
  let controller: RegistrobitacoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrobitacoraController],
      providers: [RegistrobitacoraService],
    }).compile();

    controller = module.get<RegistrobitacoraController>(RegistrobitacoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
