import {Component, Input, OnInit} from '@angular/core';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {BlockUIService} from 'ng-block-ui';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.scss']
})
export class ModalUsuarioComponent implements OnInit {
  @Input() usuario?: UsuarioGitInterface;
  usuarioModificado?: UsuarioGitInterface;

  constructor(
    private toastr: ToastrService,
    private readonly _usuarioRestService: UsuarioRestService,
    public blockuiService: BlockUIService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }

  setearUsuario(usuario: UsuarioGitInterface) {
    console.log('usuario a setear', usuario)
    this.usuarioModificado = usuario;
    console.log('usuario setead', this.usuario)
  }

  guardar() {
    this.blockuiService.start('aplicacion', 'Actualizando usuario...')
    if (this.usuarioModificado && this.usuario) {
      console.log(' guardar', )
      this._usuarioRestService
        .editar(this.usuario._id as string, this.usuarioModificado)
        .subscribe(
          r => {
            this.blockuiService.stop('aplicacion')
            this.toastr.success('Usuario actualizado', 'Correcto');
            this.activeModal.dismiss('ok')
          },
          error => {
            this.blockuiService.stop('aplicacion');
            this.toastr.error('Error con el servidor', 'Error');
          }
        )
    }
  }
}
