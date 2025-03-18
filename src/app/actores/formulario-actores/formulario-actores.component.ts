import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActoresCreacionDTO, ActoresDTO } from '../interface/ActoresCreacionDTO';
import moment from 'moment';

@Component({
  selector: 'app-formulario-actores',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatInputModule, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit {

  @Input() modelo?: ActoresDTO;
  @Output() posteoFormulario = new EventEmitter<ActoresCreacionDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null)
  });

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
    const actor = this.form.value as ActoresCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    this.posteoFormulario.emit(actor);
  }

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    return '';
  }

  obtenerErrorCampoFechaNacimiento(): string {
    let fechaNacimiento = this.form.controls.fechaNacimiento;

    if (fechaNacimiento.hasError('required')) {
      return 'El campo fecha de nacimiento es requerido';
    }

    return '';
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
}
