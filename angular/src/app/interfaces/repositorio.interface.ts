import {UsuarioGitInterface} from './usuario-git.interface';

export interface RepositorioInterface {
  id?: number;
  node_id?: string;
  name?: string;
  full_name?: string;
  private?: boolean;
  owner?: UsuarioGitInterface;
  html_url?: string;
  description?: string;
  fork?: boolean;
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;
  git_url?: string;
  ssh_url?: string;
  clone_url?: string;
  svn_url?: string;
  homepage?: string;
  size?: number;
  stargazers_count?: number;
  watchers_count?: number;
  language?: string;
  has_issues?: boolean;
  has_projects?: boolean;
  has_downloads?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  forks_count?: number;
  mirror_url?: null,
  archived?: boolean;
  disabled?: boolean;
  open_issues_count?: number;
  license?: any,
  forks?: number;
  open_issues?: number;
  watchers?: number;
  default_branch?: string;
  esRepoSuscrito?: boolean;
}
