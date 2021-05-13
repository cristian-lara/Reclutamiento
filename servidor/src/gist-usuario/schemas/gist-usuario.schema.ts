
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Usuario} from '../../usuario/schemas/usuario.schema';

export type GistUsuarioDocument = GistUsuario & Document;

@Schema()
export class GistUsuario {

    @Prop()
    id?: string;
    @Prop()
    node_id?: string;
    @Prop()
    git_pull_url?: string;
    @Prop()
    git_push_url?: string;
    @Prop()
    html_url?: string;
    @Prop()
    public?: boolean;
    @Prop()
    created_at?: string;
    @Prop()
    updated_at?: string;
    @Prop()
    description?: string;
    @Prop()
    comments?: number;
    @Prop()
    user?: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' })
    owner: Usuario;
    @Prop()
    truncated?: boolean

}

export const GistUsuarioSchema = SchemaFactory.createForClass(GistUsuario);
