import { Test, TestingModule } from '@nestjs/testing';
import { GistUsuarioController } from './gist-usuario.controller';

describe('GistUsuarioController', () => {
  let controller: GistUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GistUsuarioController],
    }).compile();

    controller = module.get<GistUsuarioController>(GistUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
