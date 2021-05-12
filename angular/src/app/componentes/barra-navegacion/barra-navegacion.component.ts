import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

  items: { label: string, routerLink: string[]}[] = [
    {
      label: 'Inicio',
      routerLink : ['/']
    },
    {
      label: 'Información github',
      routerLink: ['/informacion-github']
    },
    {
      label: 'Administración datos',
      routerLink: ['/administracion-datos']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
