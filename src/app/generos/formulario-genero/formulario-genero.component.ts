import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneroCreacionDTO, GeneroDTO } from '../interface/GeneroCreacionDTO';


@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {

  @Input() modelo?: GeneroDTO | undefined;

  @Output() posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required, primeraLetraMayuscula()] }]
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
}
