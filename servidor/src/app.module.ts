import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {GitServiciosModule} from './git-servicios/git-servicios.module';
import {CONFIGURACION} from './constantes/config';
import {MongooseModule} from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { ReposUsuarioModule } from './repos-usuario/repos-usuario.module';
import { SeguidoresUsuarioModule } from './seguidores-usuario/seguidores-usuario.module';
import { GistUsuarioModule } from './gist-usuario/gist-usuario.module';

@Module({
    imports: [
        GitServiciosModule,
        MongooseModule.forRoot(CONFIGURACION.conexionMongo),
        UsuarioModule,
        ReposUsuarioModule,
        SeguidoresUsuarioModule,
        GistUsuarioModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
