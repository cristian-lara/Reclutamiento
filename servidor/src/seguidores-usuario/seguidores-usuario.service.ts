import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {SeguidorUsuario, SeguidorUsuarioDocument} from './schemas/seguidor-usuario.schema';
import {SeguidorUsuarioDto} from './dto/seguidor-usuario.dto';

@Injectable()
export class SeguidorUsuarioService {
    constructor(
        @InjectModel(SeguidorUsuario.name) private readonly seguidoresUsuarioModelo: Model<SeguidorUsuarioDocument>,
    ) {
    }

    async create(seguidoresUsuario: SeguidorUsuarioDto): Promise<SeguidorUsuario> {
        const seguidoresUsuarioCreado = new this.seguidoresUsuarioModelo(seguidoresUsuario);
        return seguidoresUsuarioCreado.save();
    }

    async findAll(consulta = {}): Promise<SeguidorUsuario[]> {
        return this.seguidoresUsuarioModelo.find(consulta).populate('usuario').exec();
    }

    async actualizar(_id: string, seguidoresUsuario: SeguidorUsuario): Promise<SeguidorUsuario> {
        return this.seguidoresUsuarioModelo.findOneAndUpdate({_id}, seguidoresUsuario).exec();
    }

    async eliminar(_id: string,): Promise<any> {
        return this.seguidoresUsuarioModelo.deleteOne({_id}).exec();
    }
}
