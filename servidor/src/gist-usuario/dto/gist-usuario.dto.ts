import {UsuarioGitInterface} from '../../git-servicios/interfaces/usuario-git.interface';

export class GistUsuarioDto {
    id?: string;
    node_id?: string;
    git_pull_url?: string;
    git_push_url?: string;
    html_url?: string;
    public?: boolean;
    created_at?: string;
    updated_at?: string;
    description?: string;
    comments?: number;
    user?: any;
    owner?: UsuarioGitInterface;
    truncated?: boolean;
}
