import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GitServiciosModule } from './git-servicios/git-servicios.module';

@Module({
  imports: [GitServiciosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
