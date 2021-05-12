import {Injectable} from '@nestjs/common';
import {Usuario, UsuarioDocument} from './schemas/usuario.schema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {UsuarioDto} from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel(Usuario.name) private readonly usuarioModelo: Model<UsuarioDocument>,
    ) {
    }

    async create(usuario: UsuarioDto): Promise<Usuario> {
        const usuarioCreado = new this.usuarioModelo(usuario);
        return usuarioCreado.save();
    }

    async findAll(consulta = {}): Promise<Usuario[]> {
        return this.usuarioModelo.find(consulta).populate('usuario').exec();
    }

    async actualizar(_id: string, usuario: Usuario): Promise<Usuario> {
        return this.usuarioModelo.findOneAndUpdate({_id}, usuario).exec();
    }

    async eliminar(_id: string,): Promise<any> {
        return this.usuarioModelo.deleteOne({_id}).exec();
    }
}
