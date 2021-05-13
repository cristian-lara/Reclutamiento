import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {GistInterface} from '../../interfaces/gist.interface';
import {RepositorioInterface} from '../../interfaces/repositorio.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitServicioService {

  url = environment.url;
  constructor(
    private readonly _http: HttpClient
  ) { }

  obtenerUsuarios(usuario: string): Observable<UsuarioGitInterface> {
    return this._http.get(`${this.url}/git-servicios/obtener-usuarios?usuario=${usuario}`);
  }

  obtenerSeguidores(usuario:string): Observable<UsuarioGitInterface[]>{
    // @ts-ignore
    return this._http.get(`${this.url}/git-servicios/obtener-seguidores?usuario=${usuario}`);
  }

  obtenerGistUsuario(usuario: string): Observable<GistInterface[]> {
    // @ts-ignore
    return this._http.get(`${this.url}/git-servicios/obtener-gist-usuario?usuario=${usuario}`);
  }

  obtenerReposSuscritos(usuario:string): Observable<RepositorioInterface[]>{
    // @ts-ignore
    return this._http.get(`${this.url}/git-servicios/obtener-repos-suscritos?usuario=${usuario}`);
  }

  obtnerReposUsuario(usuario: string): Observable<RepositorioInterface[]>{
    // @ts-ignore
    return this._http.get(`${this.url}/git-servicios/obtener-repositorios?usuario=${usuario}`);
  }
}
