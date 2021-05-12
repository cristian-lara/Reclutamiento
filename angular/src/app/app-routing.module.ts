import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInformacionGitComponent} from './rutas/ruta-informacion-git/ruta-informacion-git.component';
import {RutaAdministracionDatosComponent} from './rutas/ruta-administracion-datos/ruta-administracion-datos.component';
import {RutaNoEncontradoComponent} from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
import {AppComponent} from './app.component';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'informacion-github',
    component: RutaInformacionGitComponent
  },
  {
    path: 'administracion-datos',
    component: RutaAdministracionDatosComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
