import {HttpClient} from '@angular/common/http';
import {convertirQueryParams} from '../funciones/convertir-query-params';

export class ServicioGenerico<Entidad> {


  constructor(
    private readonly httpClient: HttpClient,
    public readonly url: string,
    public readonly path: string
  ) {
  }

  crear(entidad: any) {
    return this.httpClient.post(this.url + this.path, entidad);
  }
  crearMany(entidad: any) {
    return this.httpClient.post(this.url + this.path + '/many', entidad);
  }

  editar(entidad: Entidad, idEntidad: number) {
    return this.httpClient.put(this.url + this.path + '/' + idEntidad , entidad);
  }

  buscar(parametros?: any) {
    const consulta = convertirQueryParams(parametros);
    const urlConsulta = `${this.url}${this.path}${consulta}`;
    return this.httpClient.get(urlConsulta);
  }

  eliminar(idEntidad: number) {
    return this.httpClient.delete(this.url + this.path + '/' + idEntidad);
  }

}
