import { Test, TestingModule } from '@nestjs/testing';
import { SeguidoresUsuarioController } from './seguidores-usuario.controller';

describe('SeguidoresUsuarioController', () => {
  let controller: SeguidoresUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguidoresUsuarioController],
    }).compile();

    controller = module.get<SeguidoresUsuarioController>(SeguidoresUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
