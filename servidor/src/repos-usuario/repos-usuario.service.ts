import {Injectable} from '@nestjs/common';
import {RepoUsuario, RepoUsuarioDocument} from './schemas/repos-usuario.schema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {RepoUsuarioDto} from './dto/repo-usuario.dto';

@Injectable()
export class RepoUsuarioService {
    constructor(
        @InjectModel(RepoUsuario.name) private readonly repoUsuarioModelo: Model<RepoUsuarioDocument>,
    ) {
    }

    async create(repoUsuario: RepoUsuarioDto): Promise<RepoUsuario> {
        const repoUsuarioCreado = new this.repoUsuarioModelo(repoUsuario);
        return repoUsuarioCreado.save();
    }

    async findAll(consulta = {}): Promise<RepoUsuario[]> {
        return this.repoUsuarioModelo.find(consulta).populate('usuario').exec();
    }

    async actualizar(_id: string, repoUsuario: RepoUsuario): Promise<RepoUsuario> {
        return this.repoUsuarioModelo.findOneAndUpdate({_id}, repoUsuario).exec();
    }

    async eliminar(_id: string,): Promise<any> {
        return this.repoUsuarioModelo.deleteOne({_id}).exec();
    }
}
