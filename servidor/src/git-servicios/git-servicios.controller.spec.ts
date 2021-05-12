import { Test, TestingModule } from '@nestjs/testing';
import { GitServiciosController } from './git-servicios.controller';

describe('GitServiciosController', () => {
  let controller: GitServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GitServiciosController],
    }).compile();

    controller = module.get<GitServiciosController>(GitServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
