import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {RepoUsuario} from './schemas/repos-usuario.schema';
import {RepoUsuarioService} from './repos-usuario.service';
import {RepoUsuarioDto} from './dto/repo-usuario.dto';

@Controller('repos-usuario')
export class RepoUsuarioController {
    constructor(private readonly _repoUsuarioService: RepoUsuarioService) {
    }

    @Post()
    async create(@Body() _repoUsuario: RepoUsuarioDto) {
        await this._repoUsuarioService.create(_repoUsuario);
    }

    @Get()
    async findAll(
        @Query() parametros
    ): Promise<RepoUsuario[]> {
        let consulta = {}
        if (parametros.nombre) {
            consulta = {nombre: new RegExp(parametros.nombre, 'ig')}
        }
        if (parametros.id) {
            consulta = {_id: parametros.id}
        }
        return this._repoUsuarioService.findAll(consulta);
    }

    @Put('/:idUsuario')
    async actualizar(
        @Param('idUsuario') idRepoUsuario: string,
        @Body() _repoUsuario: RepoUsuario
    ): Promise<RepoUsuario> {
        return this._repoUsuarioService.actualizar(idRepoUsuario, _repoUsuario);
    }

    @Delete('/:idUsuario')
    async eliminar(
        @Param('idUsuario') idRepoUsuario: string,
        @Body() _repoUsuario: RepoUsuario
    ): Promise<RepoUsuario> {
        return this._repoUsuarioService.eliminar(idRepoUsuario);
    }
}
