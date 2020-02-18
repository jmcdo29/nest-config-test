import { Test, TestingModule } from '@nestjs/testing';
import { TopPlainService } from './top-plain.service';

describe('TopPlainService', () => {
  let service: TopPlainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopPlainService],
    }).compile();

    service = module.get<TopPlainService>(TopPlainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
