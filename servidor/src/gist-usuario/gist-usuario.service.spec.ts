import { Test, TestingModule } from '@nestjs/testing';
import { GistUsuarioService } from './gist-usuario.service';

describe('GistUsuarioService', () => {
  let service: GistUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GistUsuarioService],
    }).compile();

    service = module.get<GistUsuarioService>(GistUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
