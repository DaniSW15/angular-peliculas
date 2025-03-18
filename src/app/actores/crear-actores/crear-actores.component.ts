import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresCreacionDTO } from '../interface/ActoresCreacionDTO';

@Component({
  selector: 'app-crear-actores',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actores.component.html',
  styleUrl: './crear-actores.component.css'
})
export class CrearActoresComponent {

  guardarCambios(actor: ActoresCreacionDTO) {
    console.log("Creando el actor", actor);
  }
}
