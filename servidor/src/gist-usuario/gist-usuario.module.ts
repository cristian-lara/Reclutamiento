import { Module } from '@nestjs/common';
import { GistUsuarioController } from './gist-usuario.controller';
import { GistUsuarioService } from './gist-usuario.service';
import {MongooseModule} from '@nestjs/mongoose';
import {GistUsuario, GistUsuarioSchema} from './schemas/gist-usuario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: GistUsuario.name, schema: GistUsuarioSchema }])],
  controllers: [GistUsuarioController],
  providers: [GistUsuarioService]
})
export class GistUsuarioModule {}
