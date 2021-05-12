import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {Usuario} from './schemas/usuario.schema';
import {UsuarioDto} from './dto/usuario.dto';
import {UsuarioService} from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService) {
    }

    @Post()
    async create(@Body() _usuario: UsuarioDto) {
        await this._usuarioService.create(_usuario);
    }

    @Get()
    async findAll(
        @Query() parametros
    ): Promise<Usuario[]> {
        let consulta = {}
        return this._usuarioService.findAll(consulta);
    }

    @Put('/:idUsuario')
    async actualizar(
        @Param('idUsuario') idUsuario: string,
        @Body() _usuario: Usuario
    ): Promise<Usuario> {
        return this._usuarioService.actualizar(idUsuario, _usuario);
    }

    @Delete('/:idUsuario')
    async eliminar(
        @Param('idUsuario') idUsuario: string,
        @Body() _usuario: Usuario
    ): Promise<Usuario> {
        return this._usuarioService.eliminar(idUsuario);
    }
}
