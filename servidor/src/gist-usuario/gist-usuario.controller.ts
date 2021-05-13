import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {GistUsuario} from './schemas/gist-usuario.schema';
import {GistUsuarioService} from './gist-usuario.service';
import {GistUsuarioDto} from './dto/gist-usuario.dto';

@Controller('gist-usuario')
export class GistUsuarioController {
    constructor(private readonly gistService: GistUsuarioService) {
    }

    @Post()
    async create(@Body() gist: GistUsuarioDto) {

        return  this.gistService.create(gist);
    }
    @Post('many')
    async createMany(@Body() gist: GistUsuarioDto[]) {
        console.log(gist)
        return  this.gistService.createMany(gist);
    }

    @Get()
    async findAll(
        @Query() parametros
    ): Promise<GistUsuario[]> {
        let consulta = {}
        if (parametros.nombre) {
            consulta = {nombre: new RegExp(parametros.nombre, 'ig')}
        }
        if (parametros.id) {
            consulta = {_id: parametros.id}
        }
        return this.gistService.findAll(consulta);
    }

    @Put('/:idUsuario')
    async actualizar(
        @Param('idUsuario') idGistUsuario: string,
        @Body() gist: GistUsuario
    ): Promise<GistUsuario> {
        return this.gistService.actualizar(idGistUsuario, gist);
    }

    @Delete('/:idUsuario')
    async eliminar(
        @Param('idUsuario') idGistUsuario: string,
        @Body() gist: GistUsuario
    ): Promise<GistUsuario> {
        return this.gistService.eliminar(idGistUsuario);
    }
}
