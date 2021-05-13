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
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { CardRepoComponent } from './componentes/card-repo/card-repo.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    RutaNoEncontradoComponent,
    RutaInformacionGitComponent,
    RutaAdministracionDatosComponent,
    RutaInicioComponent,
    CardRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
