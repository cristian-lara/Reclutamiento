import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ServicioGenerico} from '../servicio-generico';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';

@Injectable({
  providedIn: 'root'
})
export class ReposRestService extends ServicioGenerico<UsuarioGitInterface>{

  url = environment.url;

  constructor(
    private readonly _httpClient: HttpClient
  ) {
    super(
      _httpClient,
      environment.url,
      '/repos-usuario'
    )
  }


}
