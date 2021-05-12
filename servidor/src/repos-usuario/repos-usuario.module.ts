import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ReposUsuarioSchema, RepoUsuario} from './schemas/repos-usuario.schema';
import {RepoUsuarioService} from './repos-usuario.service';
import {RepoUsuarioController} from './repos-usuario.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: RepoUsuario.name, schema: ReposUsuarioSchema }])],
  controllers: [RepoUsuarioController],
  providers: [RepoUsuarioService]
})
export class ReposUsuarioModule {}
