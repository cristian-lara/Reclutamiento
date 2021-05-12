import { Module } from '@nestjs/common';
import { ReposUsuarioController } from './repos-usuario.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {ReposUsuarioSchema, RepoUsuario} from './schemas/repos-usuario.schema';
import {RepoUsuarioService} from './repos-usuario.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: RepoUsuario.name, schema: ReposUsuarioSchema }])],
  controllers: [ReposUsuarioController],
  providers: [RepoUsuarioService]
})
export class ReposUsuarioModule {}
