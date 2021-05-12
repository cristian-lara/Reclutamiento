import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import {MongooseModule} from '@nestjs/mongoose';
import {Usuario, UsuarioSchema} from './schemas/usuario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
