import { Test, TestingModule } from '@nestjs/testing';
import { ReposUsuarioController } from './repos-usuario.controller';

describe('ReposUsuarioController', () => {
  let controller: ReposUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReposUsuarioController],
    }).compile();

    controller = module.get<ReposUsuarioController>(ReposUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
