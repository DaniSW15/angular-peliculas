import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresCreacionDTO, ActoresDTO } from '../interface/ActoresCreacionDTO';

@Component({
  selector: 'app-editar-actores',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actores.component.html',
  styleUrl: './editar-actores.component.css'
})
export class EditarActoresComponent {
  @Input({transform: numberAttribute}) id!: number;

  actor: ActoresDTO = {id: 1, nombre: 'Drama', fechaNacimiento: new Date(2020,0,22), foto: 'https://picsum.photos/200'};

  guardarCambios(actor: ActoresCreacionDTO) {
    // console.log(this.form.value);
    console.log("Editar el actor",actor);
  }
}
