import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {SeguidorUsuarioService} from './seguidores-usuario.service';
import {SeguidorUsuarioDto} from './dto/seguidor-usuario.dto';
import {SeguidorUsuario} from './schemas/seguidor-usuario.schema';

@Controller('seguidores-usuario')
export class SeguidorUsuarioController {
    constructor(private readonly seguidorUsuarioService: SeguidorUsuarioService) {
    }

    @Post()
    async create(@Body() seguidorUsuario: SeguidorUsuarioDto) {
        await this.seguidorUsuarioService.create(seguidorUsuario);
    }

    @Get()
    async findAll(
        @Query() parametros
    ): Promise<SeguidorUsuario[]> {
        let consulta = {}
        if (parametros.nombre) {
            consulta = {nombre: new RegExp(parametros.nombre, 'ig')}
        }
        if (parametros.id) {
            consulta = {_id: parametros.id}
        }
        return this.seguidorUsuarioService.findAll(consulta);
    }

    @Put('/:idUsuario')
    async actualizar(
        @Param('idUsuario') idSeguidorUsuario: string,
        @Body() seguidorUsuario: SeguidorUsuario
    ): Promise<SeguidorUsuario> {
        return this.seguidorUsuarioService.actualizar(idSeguidorUsuario, seguidorUsuario);
    }

    @Delete('/:idUsuario')
    async eliminar(
        @Param('idUsuario') idSeguidorUsuario: string,
        @Body() seguidorUsuario: SeguidorUsuario
    ): Promise<SeguidorUsuario> {
        return this.seguidorUsuarioService.eliminar(idSeguidorUsuario);
    }
}
