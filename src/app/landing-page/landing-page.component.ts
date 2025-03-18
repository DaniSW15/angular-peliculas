import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];

  ngOnInit() {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Inside Out 2',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://picsum.photos/200/300'
      }, {
        titulo: 'Moana',
        fechaLanzamiento: new Date(),
        precio: 1500.99,
        poster: 'https://picsum.photos/200/300'
      }, {
        titulo: 'Los increibles 2',
        fechaLanzamiento: new Date(),
        precio: 1000.99,
        poster: 'https://picsum.photos/200/300'
      }];

      this.peliculasProximosEstrenos = [{
        titulo: 'Soul',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://picsum.photos/200/300'
      }, {
        titulo: 'Raya and the last dragon',
        fechaLanzamiento: new Date(),
        precio: 1500.99,
        poster: 'https://picsum.photos/200/300'
      }, {
        titulo: 'Luca',
        fechaLanzamiento: new Date(),
        precio: 1000.99,
        poster: 'https://picsum.photos/200/300'
      }];
    }, 1000);
  }

  procesarVoto(voto: number) {
    alert(`Calificación: ${voto}`);
  }
}
