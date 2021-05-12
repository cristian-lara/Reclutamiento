import {Module} from '@nestjs/common';
import {SeguidoresUsuarioController} from './seguidores-usuario.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {SeguidorUsuario, SeguidorUsuarioSchema} from './schemas/seguidor-usuario.schema';
import {SeguidorUsuarioService} from './seguidores-usuario.service';

@Module({
    imports: [MongooseModule.forFeature([{name: SeguidorUsuario.name, schema: SeguidorUsuarioSchema}])],
    controllers: [SeguidoresUsuarioController],
    providers: [SeguidorUsuarioService]
})
export class SeguidoresUsuarioModule {
}
