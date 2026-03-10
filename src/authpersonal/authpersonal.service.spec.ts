import { Test, TestingModule } from '@nestjs/testing';
import { AuthpersonalService } from './authpersonal.service';

describe('AuthpersonalService', () => {
  let service: AuthpersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthpersonalService],
    }).compile();

    service = module.get<AuthpersonalService>(AuthpersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
