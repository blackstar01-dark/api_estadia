import { Test, TestingModule } from '@nestjs/testing';
import { AuthpersonalController } from './authpersonal.controller';
import { AuthpersonalService } from './authpersonal.service';

describe('AuthpersonalController', () => {
  let controller: AuthpersonalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthpersonalController],
      providers: [AuthpersonalService],
    }).compile();

    controller = module.get<AuthpersonalController>(AuthpersonalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
