import {Component, Input, OnInit} from '@angular/core';
import {GistInterface} from '../../interfaces/gist.interface';
import {RepositorioInterface} from '../../interfaces/repositorio.interface';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.scss']
})
export class CardRepoComponent implements OnInit {

  @Input() titulo?: string
  @Input() gist?: GistInterface[];
  @Input() repositorio?: RepositorioInterface[];
  @Input() seguidores?: UsuarioGitInterface[];
  constructor() { }

  ngOnInit(): void {
    console.log('gist entrantes', this.gist)
  }

}
