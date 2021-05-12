import { Test, TestingModule } from '@nestjs/testing';
import { ReposUsuarioService } from './repos-usuario.service';

describe('ReposUsuarioService', () => {
  let service: ReposUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReposUsuarioService],
    }).compile();

    service = module.get<ReposUsuarioService>(ReposUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
