import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {SeguidorUsuario, SeguidorUsuarioSchema} from './schemas/seguidor-usuario.schema';
import {SeguidorUsuarioService} from './seguidores-usuario.service';
import {SeguidorUsuarioController} from './seguidores-usuario.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: SeguidorUsuario.name, schema: SeguidorUsuarioSchema}])],
    controllers: [SeguidorUsuarioController],
    providers: [SeguidorUsuarioService]
})
export class SeguidoresUsuarioModule {
}
