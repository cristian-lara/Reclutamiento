import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {UsuarioGitInterface} from '../../git-servicios/interfaces/usuario-git.interface';
import {Usuario} from '../../usuario/schemas/usuario.schema';

export type RepoUsuarioDocument = RepoUsuario & Document;

@Schema()
export class RepoUsuario {

    @Prop()
    id?: number;
    @Prop()
    node_id?: string;
    @Prop()
    name?: string;
    @Prop()
    full_name?: string;
    @Prop()
    private?: boolean;
    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' } })
    owner: Usuario;
    @Prop()
    html_url?: string;
    @Prop()
    description?: string;
    @Prop()
    fork?: boolean;
    @Prop()
    created_at?: string;
    @Prop()
    updated_at?: string;
    @Prop()
    pushed_at?: string;
    @Prop()
    git_url?: string;
    @Prop()
    ssh_url?: string;
    @Prop()
    clone_url?: string;
    @Prop()
    svn_url?: string;
    @Prop()
    homepage?: string;
    @Prop()
    size?: number;
    @Prop()
    stargazers_count?: number;
    @Prop()
    watchers_count?: number;
    @Prop()
    language?: string;
    @Prop()
    has_issues?: boolean;
    @Prop()
    has_projects?: boolean;
    @Prop()
    has_downloads?: boolean;
    @Prop()
    has_wiki?: boolean;
    @Prop()
    has_pages?: boolean;
    @Prop()
    forks_count?: number;
    @Prop()
    mirror_url?: string;
    @Prop()
    archived?: boolean;
    @Prop()
    disabled?: boolean;
    @Prop()
    open_issues_count?: number;

    @Prop()
    forks?: number;
    @Prop()
    open_issues?: number;
    @Prop()
    watchers?: number;
    @Prop()
    default_branch?: string;
}

export const ReposUsuarioSchema = SchemaFactory.createForClass(RepoUsuario);
