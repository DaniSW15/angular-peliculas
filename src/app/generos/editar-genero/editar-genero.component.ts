import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../interface/GeneroCreacionDTO';

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  @Input({transform: numberAttribute}) id!: number;

  genero: GeneroDTO = {id: 1, nombre: 'Drama'};

  guardarCambios(genero: GeneroCreacionDTO) {
    // console.log(this.form.value);
    console.log("Editar el genero",genero);
  }


}
