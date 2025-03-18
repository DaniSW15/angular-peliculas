import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/components/listado-generico/listado-generico.component";
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe,CurrencyPipe,ListadoGenericoComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  @Input({ required: true })
  peliculas!: any[];
}
