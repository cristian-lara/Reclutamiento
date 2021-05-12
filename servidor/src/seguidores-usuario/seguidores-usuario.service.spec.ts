import { Test, TestingModule } from '@nestjs/testing';
import { SeguidoresUsuarioService } from './seguidores-usuario.service';

describe('SeguidoresUsuarioService', () => {
  let service: SeguidoresUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeguidoresUsuarioService],
    }).compile();

    service = module.get<SeguidoresUsuarioService>(SeguidoresUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
