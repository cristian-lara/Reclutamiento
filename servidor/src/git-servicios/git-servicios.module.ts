import {HttpModule, Module} from '@nestjs/common';
import { GitServiciosController } from './git-servicios.controller';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [GitServiciosController]
})
export class GitServiciosModule {}
