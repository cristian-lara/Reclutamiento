import {Injectable} from '@nestjs/common';
import {GistUsuario, GistUsuarioDocument} from './schemas/gist-usuario.schema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {GistUsuarioDto} from './dto/gist-usuario.dto';

@Injectable()
export class GistUsuarioService {
    constructor(
        @InjectModel(GistUsuario.name) private readonly gistUsuarioModelo: Model<GistUsuarioDocument>,
    ) {
    }

    async create(gistUsuario: GistUsuarioDto): Promise<GistUsuario> {
        const gistUsuarioCreado = new this.gistUsuarioModelo(gistUsuario);
        return gistUsuarioCreado.save();
    }

    async findAll(consulta = {}): Promise<GistUsuario[]> {
        return this.gistUsuarioModelo.find(consulta).populate('usuario').exec();
    }

    async actualizar(_id: string, gistUsuario: GistUsuario): Promise<GistUsuario> {
        return this.gistUsuarioModelo.findOneAndUpdate({_id}, gistUsuario).exec();
    }

    async eliminar(_id: string,): Promise<any> {
        return this.gistUsuarioModelo.deleteOne({_id}).exec();
    }
}
