import {Component, OnInit} from '@angular/core';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';
import {ToastrService} from 'ngx-toastr';
import {BlockUIService} from 'ng-block-ui';
import {encontrarIndice} from '../../funciones/encontrar-indice';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalUsuarioComponent} from '../../componentes/modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-ruta-administracion-datos',
  templateUrl: './ruta-administracion-datos.component.html',
  styleUrls: ['./ruta-administracion-datos.component.scss']
})
export class RutaAdministracionDatosComponent implements OnInit {
  usuarios: any;
  usuariosCreados?: UsuarioGitInterface[];

  constructor(
    private toastr: ToastrService,
    private readonly _usuarioRestService: UsuarioRestService,
    public blockuiService: BlockUIService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  cargarUsuarios() {
    this.blockuiService.start('aplicacion', 'Cargando datos iniciales...')
    this._usuarioRestService
      .buscar()
      .subscribe(
        (respuestaUsuarios: UsuarioGitInterface[]) => {
          this.usuariosCreados = respuestaUsuarios;
          this.blockuiService.stop('aplicacion')
          this.toastr.success('Usuarios cargados', 'Correcto');

        },
        (error: any) => {
          this.blockuiService.stop('aplicacion');
          this.toastr.error('Error con el servidor', 'Error');
        }
      )
  }

  editar(usuario: UsuarioGitInterface) {
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
    modalRef.result.then(
      r => {
      }
    ).catch(
      e => {
        console.log('e', e)
        if (e === 'ok') {
          this.cargarUsuarios();
        }
      }
    )

  }

  eliminar(usuarios: UsuarioGitInterface) {
    this.blockuiService.start('aplicacion', 'Eliminando usuario...')
    this._usuarioRestService
      .eliminar(usuarios._id as string)
      .subscribe(
        (r: any) => {

          this.blockuiService.stop('aplicacion')
          this.toastr.success('Usuario eliminado', 'Correcto');
          if (this.usuariosCreados) {
            const indice = encontrarIndice(this.usuariosCreados, usuarios);
            if (indice !== -1) {
              this.usuariosCreados.splice(indice, 1);
            }
          }


        },
        (error: any) => {
          this.blockuiService.stop('aplicacion');
          this.toastr.error('Error con el servidor', 'Error');
        }
      )
  }
}
