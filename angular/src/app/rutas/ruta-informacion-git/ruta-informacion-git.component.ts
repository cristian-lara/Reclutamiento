import {Component, OnInit} from '@angular/core';
import {GitServicioService} from '../../servicios/git-services/git-servicio.service';
import {ToastrService} from 'ngx-toastr';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';
import {GistInterface} from '../../interfaces/gist.interface';
import {RepositorioInterface} from '../../interfaces/repositorio.interface';
import {BlockUIService} from 'ng-block-ui';

@Component({
  selector: 'app-ruta-informacion-git',
  templateUrl: './ruta-informacion-git.component.html',
  styleUrls: ['./ruta-informacion-git.component.scss']
})
export class RutaInformacionGitComponent implements OnInit {
  usuarioGithub?: string;
  usuarioGithubEncontrado?: UsuarioGitInterface;
  seguidoresEncontrados?: UsuarioGitInterface[];
  gistEncontrados?: GistInterface[];
  reposSuscritosEncontrados?: RepositorioInterface[];
  reposUsuarioEncontrados?: RepositorioInterface[];
  idUSuarioCreado?: string;

  constructor(
    private readonly _servicioGitRestService: GitServicioService,
    private toastr: ToastrService,
    private readonly _usuarioRestService: UsuarioRestService,
    public blockuiService: BlockUIService
  ) {
  }

  ngOnInit(): void {

  }

  buscarUsuarioGit() {
    this.blockuiService.start('aplicacion', 'Buscando...');
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerUsuarios(this.usuarioGithub)
        .subscribe(
          usuarioEncontrado => {
            this.usuarioGithubEncontrado = usuarioEncontrado;
            this.toastr.success('Usuario encontrado', 'Correcto');
            this.blockuiService.stop('aplicacion');
          },
          error => {
            this.toastr.error('Error con el servidor', 'Error');
            this.blockuiService.stop('aplicacion');

          }
        )
    }

  }

  guardarUsuario(usuario: UsuarioGitInterface) {
    this.blockuiService.start('aplicacion', 'Buscando...');

    this._usuarioRestService
      .crear(usuario)
      .subscribe(
        (r: UsuarioGitInterface) => {
          this.idUSuarioCreado = r._id;
          this.toastr.success('Usuario creado correctamente', 'Correcto');

          this.blockuiService.stop('aplicacion');

        },
        error => {
          this.toastr.error('Error con el servidor', 'Error');
          this.blockuiService.stop('aplicacion');

        }
      )
  }

  verSeguidores() {
    this.blockuiService.start('aplicacion', 'Buscando...');

    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerSeguidores(this.usuarioGithub)
        .subscribe(
          seguidores => {
            this.seguidoresEncontrados = seguidores;
            this.blockuiService.stop('aplicacion');

            if (this.seguidoresEncontrados.length === 0) {
              this.toastr.warning('No se encontro resultados', 'Cuidado');
            } else {
              this.toastr.success('Seguidores encontrados', 'Correcto');
            }
          },
          error => {
            this.toastr.error('Error con el servidor o no se encontraron seguidores', 'Error');
            this.blockuiService.stop('aplicacion');

          }
        )
    }
  }

  verGist() {
    this.blockuiService.start('aplicacion', 'Buscando...');

    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerGistUsuario(this.usuarioGithub)
        .subscribe(
          gist => {
            this.gistEncontrados = gist;
            if (this.gistEncontrados.length === 0) {
              this.toastr.warning('No se encontro resultados', 'Cuidado');
            } else {
              this.toastr.success('Gist encontrados', 'Correcto');
            }
            this.blockuiService.stop('aplicacion');

          },
          error => {
            this.toastr.error('Error con el servidor o no existen gist', 'Error');
            this.blockuiService.stop('aplicacion');

          }
        )
    }
  }

  verRepositoriosSuscritos() {
    this.blockuiService.start('aplicacion', 'Buscando...');

    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerReposSuscritos(this.usuarioGithub)
        .subscribe(
          reposSuscritos => {
            this.reposSuscritosEncontrados = reposSuscritos;
            if (this.reposSuscritosEncontrados.length === 0) {
              this.toastr.warning('No se encontro resultados', 'Cuidado');
            } else {
              this.toastr.success('Repositorios suscritos encontrados', 'Correcto');
            }
            this.blockuiService.stop('aplicacion');

          },
          error => {
            this.toastr.error('Error con el servidor o no hay repositorios suscritos del usuario', 'Error');
            this.blockuiService.stop('aplicacion');

          }
        )
    }
  }

  verRepositoris() {
    this.blockuiService.start('aplicacion', 'Buscando...');

    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtnerReposUsuario(this.usuarioGithub)
        .subscribe(
          repos => {
            this.reposUsuarioEncontrados = repos;

            if (this.reposUsuarioEncontrados.length === 0) {
              this.toastr.warning('No se encontro resultados', 'Cuidado');
            } else {
              this.toastr.success('Repositorios encontrados', 'Correcto');
            }
            this.blockuiService.stop('aplicacion');

          },
          error => {
            this.toastr.error('Error con el servidor o no se encontraron repositorios', 'Error');
            this.blockuiService.stop('aplicacion');

          }
        )
    }
  }
}
