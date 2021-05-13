import { Controller, Get, HttpService, Query } from '@nestjs/common';
import { UsuarioGitInterface } from './interfaces/usuario-git.interface';
import { CONFIGURACION } from '../constantes/config';
import { GistInterface } from './interfaces/gist.interface';
import { RepositorioInterface } from './interfaces/repositorio.interface';
import { throws } from 'assert';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios').default;

@Controller('git-servicios')
export class GitServiciosController {
  constructor(private readonly _httpService: HttpService) {}

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-usuarios')
  async obtenerUsuarios(
    @Query('usuario') usuario: string,
  ): Promise<UsuarioGitInterface> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}`,
      );
      const respuestaUsuarios: UsuarioGitInterface = respuesta.data;
      return respuestaUsuarios;
    } else {
      return {
        login: 'cristian-lara',
        id: 22013576,
        node_id: 'MDQ6VXNlcjIyMDEzNTc2',
        avatar_url: 'https://avatars.githubusercontent.com/u/22013576?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/cristian-lara',
        html_url: 'https://github.com/cristian-lara',
        type: 'User',
        site_admin: false,
        name: 'Cristian Lara',
        company: null,
        blog: '',
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 21,
        public_gists: 10,
        followers: 0,
        following: 0,
        created_at: '2016-09-05T20:36:16Z',
        updated_at: '2021-05-05T16:36:54Z',
      };
    }
  }

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-seguidores')
  async obtenerSeguidores(
    @Query('usuario') usuario: string,
  ): Promise<UsuarioGitInterface[]> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}/followers`,
      );
      const respuestaUsuarios: UsuarioGitInterface[] = respuesta.data;
      return respuestaUsuarios;
    } else {
      return [
        {
          login: 'rafaelsachetto',
          id: 42780,
          node_id: 'MDQ6VXNlcjQyNzgw',
          avatar_url: 'https://avatars.githubusercontent.com/u/42780?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/rafaelsachetto',
          html_url: 'https://github.com/rafaelsachetto',
          type: 'User',
          site_admin: false,
        },
      ];
    }
  }

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-siguiendo-a')
  async obtenerSiguiendoA(
    @Query('usuario') usuario: string,
    @Query('seguidor') seguidor: string,
  ): Promise<number> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}/following/${seguidor}`,
      );
      const respuestaSiguiendoA: number = respuesta.data;
      return respuestaSiguiendoA;
    } else {
      return 1;
    }
  }

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-gist-usuario')
  async obtenerGist(
    @Query('usuario') usuario: string,
  ): Promise<GistInterface[]> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}/gists`,
      );
      const respuestaGistUsuarios: GistInterface[] = respuesta.data;
      return respuestaGistUsuarios;
    } else {
      return [
        {
          id: '9f0eff456d87f8caf5aee5147ef0ba6c',
          node_id: 'MDQ6R2lzdDlmMGVmZjQ1NmQ4N2Y4Y2FmNWFlZTUxNDdlZjBiYTZj',
          git_pull_url:
            'https://gist.github.com/9f0eff456d87f8caf5aee5147ef0ba6c.git',
          git_push_url:
            'https://gist.github.com/9f0eff456d87f8caf5aee5147ef0ba6c.git',
          html_url: 'https://gist.github.com/9f0eff456d87f8caf5aee5147ef0ba6c',
          public: true,
          created_at: '2018-05-19T22:08:20Z',
          updated_at: '2019-01-15T23:09:59Z',
          description: '',
          comments: 1,
          user: null,
          owner: {
            login: 'cristian-lara',
            id: 22013576,
            node_id: 'MDQ6VXNlcjIyMDEzNTc2',
            avatar_url: 'https://avatars.githubusercontent.com/u/22013576?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/cristian-lara',
            html_url: 'https://github.com/cristian-lara',
            type: 'User',
            site_admin: false,
          },
          truncated: false,
        },
      ];
    }
  }

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-repos-suscritos')
  async obtenerReposSuscritos(
    @Query('usuario') usuario: string,
  ): Promise<RepositorioInterface[]> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}/subscriptions`,
      );
      const respuestaUsuarios: RepositorioInterface[] = respuesta.data;
      return respuestaUsuarios;
    } else {
      return [
        {
          id: 1336779,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzM2Nzc5',
          name: 'dotjs',
          full_name: 'defunkt/dotjs',
          private: false,
          owner: {
            login: 'defunkt',
            id: 2,
            node_id: 'MDQ6VXNlcjI=',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            gravatar_id: '',
            html_url: 'https://github.com/defunkt',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/defunkt/dotjs',
          description: '~/.js',
          fork: false,
          created_at: '2011-02-07T07:01:33Z',
          updated_at: '2021-04-25T08:06:59Z',
          pushed_at: '2018-07-26T16:09:13Z',
          git_url: 'git://github.com/defunkt/dotjs.git',
          ssh_url: 'git@github.com:defunkt/dotjs.git',
          clone_url: 'https://github.com/defunkt/dotjs.git',
          svn_url: 'https://github.com/defunkt/dotjs',
          homepage: 'http://bit.ly/dotjs',
          size: 579,
          stargazers_count: 3179,
          watchers_count: 3179,
          language: 'Ruby',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: true,
          forks_count: 371,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 25,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          forks: 371,
          open_issues: 25,
          watchers: 3179,
          default_branch: 'master',
        },
      ];
    }
  }

  /**
   * method: get
   * @param usuario
   */
  @Get('obtener-repositorios')
  async obtenerRepositorios(
    @Query('usuario') usuario: string,
  ): Promise<RepositorioInterface[]> {
    if (!CONFIGURACION.offline) {
      const respuesta = await axios.get(
        `${CONFIGURACION.urlGit}users/${usuario}/repos`,
      );
      const respuestaUsuarios: RepositorioInterface[] = respuesta.data;
      return respuestaUsuarios;
    } else {
      return [
        {
          id: 1336779,
          node_id: 'MDEwOlJlcG9zaXRvcnkxMzM2Nzc5',
          name: 'dotjs',
          full_name: 'defunkt/dotjs',
          private: false,
          owner: {
            login: 'defunkt',
            id: 2,
            node_id: 'MDQ6VXNlcjI=',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            gravatar_id: '',
            html_url: 'https://github.com/defunkt',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/defunkt/dotjs',
          description: '~/.js',
          fork: false,
          created_at: '2011-02-07T07:01:33Z',
          updated_at: '2021-04-25T08:06:59Z',
          pushed_at: '2018-07-26T16:09:13Z',
          git_url: 'git://github.com/defunkt/dotjs.git',
          ssh_url: 'git@github.com:defunkt/dotjs.git',
          clone_url: 'https://github.com/defunkt/dotjs.git',
          svn_url: 'https://github.com/defunkt/dotjs',
          homepage: 'http://bit.ly/dotjs',
          size: 579,
          stargazers_count: 3179,
          watchers_count: 3179,
          language: 'Ruby',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: true,
          forks_count: 371,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 25,
          license: {
            key: 'mit',
            name: 'MIT License',
            spdx_id: 'MIT',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
          },
          forks: 371,
          open_issues: 25,
          watchers: 3179,
          default_branch: 'master',
        },
      ];
    }
  }
}
