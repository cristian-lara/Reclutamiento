import {Component, Input, OnInit} from '@angular/core';
import {GistInterface} from '../../interfaces/gist.interface';
import {RepositorioInterface} from '../../interfaces/repositorio.interface';

@Component({
  selector: 'app-card-repo',
  templateUrl: './card-repo.component.html',
  styleUrls: ['./card-repo.component.scss']
})
export class CardRepoComponent implements OnInit {

  @Input() titulo?: string
  @Input() gist?: GistInterface[];
  @Input() repositorio?: RepositorioInterface[];
  constructor() { }

  ngOnInit(): void {
  }

}
