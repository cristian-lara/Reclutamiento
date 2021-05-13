import {Component, OnInit} from '@angular/core';
import {GitServicioService} from '../../servicios/git-services/git-servicio.service';
import {ToastrService} from 'ngx-toastr';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';
import {GistInterface} from '../../interfaces/gist.interface';
import {RepositorioInterface} from '../../interfaces/repositorio.interface';

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
    private readonly _usuarioRestService: UsuarioRestService
  ) {
  }

  ngOnInit(): void {

  }

  buscarUsuarioGit() {
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerUsuarios(this.usuarioGithub)
        .subscribe(
          usuarioEncontrado => {
            this.usuarioGithubEncontrado = usuarioEncontrado;
            this.toastr.success('Usuario encontrado', 'Correcto');
          },
          error => {
            this.toastr.error('Error con el servidor', 'Error');
          }
        )
    }

  }

  guardarUsuario(usuario: UsuarioGitInterface) {

    this._usuarioRestService
      .crear(usuario)
      .subscribe(
        (r: UsuarioGitInterface) => {
          this.idUSuarioCreado = r._id;
          this.toastr.success('Usuario creado correctamente', 'Correcto');
        },
        error => {
          this.toastr.error('Error con el servidor', 'Error');
        }
      )
  }

  verSeguidores() {
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerSeguidores(this.usuarioGithub)
        .subscribe(
          seguidores => {
            this.seguidoresEncontrados = seguidores;
            this.toastr.success('Seguidores encontrados', 'Correcto');
          },
          error => {
            this.toastr.error('Error con el servidor o no se encontraron seguidores', 'Error');
          }
        )
    }
  }

  verGist() {
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerGistUsuario(this.usuarioGithub)
        .subscribe(
          gist => {
            this.gistEncontrados = gist;
            this.toastr.success('Gist encontrados', 'Correcto');
          },
          error => {
            this.toastr.error('Error con el servidor o no existen gist', 'Error');
          }
        )
    }
  }

  verRepositoriosSuscritos() {
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtenerReposSuscritos(this.usuarioGithub)
        .subscribe(
          reposSuscritos => {
            this.reposSuscritosEncontrados = reposSuscritos;
            this.toastr.success('Repositorios suscritos encontrados', 'Correcto');
          },
          error => {
            this.toastr.error('Error con el servidor o no hay repositorios suscritos del usuario', 'Error');
          }
        )
    }
  }

  verRepositoris() {
    if (this.usuarioGithub) {
      this._servicioGitRestService
        .obtnerReposUsuario(this.usuarioGithub)
        .subscribe(
          repos => {
            this.reposUsuarioEncontrados = repos;
            this.toastr.success('Repositorios encontrados', 'Correcto');
          },
          error => {
            this.toastr.error('Error con el servidor o no se encontraron repositorios', 'Error');
          }
        )
    }
  }
}
