import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Usuario} from '../../usuario/schemas/usuario.schema';

export type SeguidorUsuarioDocument = SeguidorUsuario & Document;

@Schema()
export class SeguidorUsuario {
    @Prop()
    login?: string;
    @Prop()
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
    compstring?: string;
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

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' } })
    usuario: Usuario;

}

export const SeguidorUsuarioSchema = SchemaFactory.createForClass(SeguidorUsuario);
