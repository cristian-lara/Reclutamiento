import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {UsuarioGitInterface} from '../../interfaces/usuario-git.interface';
import {MENSAJES_VALIDACION_USUARIO} from './mensajes-validacion';
import {UsuarioRestService} from '../../servicios/rest/usuario-rest.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  formularioUsuario?: FormGroup;
  mensajesErrorUsuario: string[] = [];
  mensajesErrorPassword: string[] = [];
  subscriptores: Subscription[] = [];
  @Input() usuarioCrearEditar?: UsuarioGitInterface;
  private mensajesValidacionUsuario = MENSAJES_VALIDACION_USUARIO;
  @Output() usuarioEmitir: EventEmitter<UsuarioGitInterface> = new EventEmitter<UsuarioGitInterface>();

  constructor(private readonly formBuilder: FormBuilder,
              public readonly usuarioRestService: UsuarioRestService,
  ) {
  }

  ngOnInit(): void {
    this.formularioUsuario = this.formBuilder.group(
      {

        name: [this.usuarioCrearEditar ? this.usuarioCrearEditar.name : '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ],
        ],
      });
    this.escucharFormulario();
    if (this.formularioUsuario) {
      this.escucharCampoUsuario();
    }
  }

  ngOnDestroy(): void {
    this.subscriptores.forEach(valor => valor.unsubscribe());
  }

  private escucharFormulario(): any {
    // el observable que escucha cambios
    if (this.formularioUsuario) {
      const observableCambiosFormulario$ = this.formularioUsuario.valueChanges;
      const observableFOmrulario = observableCambiosFormulario$
        .pipe(
          debounceTime(1000)
        )
        .subscribe((formulario) => {
          console.log(this.formularioUsuario?.valid, formulario)
          if (this.formularioUsuario?.valid) {
            this.usuarioEmitir.emit(formulario)
          } else {
            this.usuarioEmitir.emit(undefined)
          }

        });
      this.subscriptores.push(observableFOmrulario);
    }


  }

  private escucharCampoUsuario(): any {
    if (this.formularioUsuario) {
      const controlUsuario = this.formularioUsuario.get('name') as AbstractControl;

      const observableDeCambiosUsuario$ = controlUsuario.valueChanges;

      const respuestaObservableUsuario = observableDeCambiosUsuario$
        .pipe(
          debounceTime(1000)
        )
        .subscribe((respuesta) => {
          this.setearMensajesUsuario(controlUsuario);
        });
      this.subscriptores.push(respuestaObservableUsuario);
    }
  }

  private setearMensajesUsuario(controlForm: AbstractControl): any {
    this.mensajesErrorUsuario = [];
    const tieneErrores = (controlForm.dirty || controlForm.touched) && controlForm.errors;
    if (tieneErrores) {
      const errores = controlForm.errors as { required: string; minlength: string; maxlength: string; pattern: string; };
      this.mensajesErrorUsuario = Object.keys(errores)
        .map((atributo) => {
          const mensajeError: 'required' | 'minlength' | 'maxlength' = atributo as 'required' | 'minlength' | 'maxlength';
          return this.mensajesValidacionUsuario[mensajeError];
        });
    }
  }

  crearEditar() {

  }
}
