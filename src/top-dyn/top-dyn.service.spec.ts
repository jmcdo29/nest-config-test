import { Test, TestingModule } from '@nestjs/testing';
import { TopDynService } from './top-dyn.service';

describe('TopDynService', () => {
  let service: TopDynService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopDynService],
    }).compile();

    service = module.get<TopDynService>(TopDynService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
