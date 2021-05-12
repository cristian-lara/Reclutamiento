import { Component, OnInit } from '@angular/core';
import {GitServicioService} from '../../servicios/git-services/git-servicio.service';
import {ToasterService} from 'angular2-toaster';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ruta-informacion-git',
  templateUrl: './ruta-informacion-git.component.html',
  styleUrls: ['./ruta-informacion-git.component.scss']
})
export class RutaInformacionGitComponent implements OnInit {

  constructor(
    private readonly _servicioGitRestService: GitServicioService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  mostrarToast(){
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
