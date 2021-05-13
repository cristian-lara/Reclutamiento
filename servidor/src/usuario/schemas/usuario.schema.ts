import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {SeguidorUsuario} from '../../seguidores-usuario/schemas/seguidor-usuario.schema';
import {GistUsuario} from '../../gist-usuario/schemas/gist-usuario.schema';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop()
    login?: string;
    id?: number;
    @Prop()
    node_id?: string;
    @Prop()
    avatar_url?: string;
    @Prop()
    gravatar_id?: string;
    @Prop()
    url?: string;
    @Prop()
    html_url?: string;
    @Prop()
    type?: string;
    @Prop()
    site_admin?: boolean;
    @Prop()
    name?: string;

    @Prop()
    company?: string;

    @Prop()
    blog?: string;
    @Prop()
    location?: string;
    @Prop()
    email?: string;
    @Prop()
    hireable?: string;
    @Prop()
    bio?: string;
    @Prop()
    twitter_username?: string;
    @Prop()
    public_repos?: number;
    @Prop()
    public_gists?: number;
    @Prop()
    followers?: number;
    @Prop()
    following?: number;
    @Prop()
    created_at?: string;
    @Prop()
    updated_at?: string
    @Prop()

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SeguidorUsuario' }] })
    seguidores: SeguidorUsuario[];
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GistUsuario' }] })
    gists: GistUsuario[];

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
