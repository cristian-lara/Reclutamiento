import {Component, OnInit} from '@angular/core';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.scss']
})
export class ModalUsuarioComponent implements OnInit {
  usuario?: UsuarioGitInterface;

  constructor(
    private readonly _usuarioRestService: UsuarioRestService
  ) {
  }

  ngOnInit(): void {
  }

  setearUsuario(usuario: UsuarioGitInterface) {
    this.usuario = usuario;
  }

  guardar() {
    if(this.usuario){
      // this._usuarioRestService.editar(this.usuario._id as string, this.usuario as UsuarioGitInterface)
    }
  }
}
