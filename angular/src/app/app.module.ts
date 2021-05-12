import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BarraNavegacionComponent} from './componentes/barra-navegacion/barra-navegacion.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { RutaNoEncontradoComponent } from './rutas/ruta-no-encontrado/ruta-no-encontrado.component';
import { RutaInformacionGitComponent } from './rutas/ruta-informacion-git/ruta-informacion-git.component';
import { RutaAdministracionDatosComponent } from './rutas/ruta-administracion-datos/ruta-administracion-datos.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    RutaNoEncontradoComponent,
    RutaInformacionGitComponent,
    RutaAdministracionDatosComponent,
    RutaInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
