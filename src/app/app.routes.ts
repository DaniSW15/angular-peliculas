import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'generos',
    component: IndiceGenerosComponent
  },
  {
    path: 'generos/crear',
    component: CrearGenerosComponent
  },
  {
    path: 'generos/editar/:id',
    component: EditarGeneroComponent
  },
  {
    path: 'actores',
    component: IndiceActoresComponent
  },
  {
    path: 'actores/crear',
    component: CrearActoresComponent
  },
  {
    path: 'actores/editar/:id',
    component: EditarActoresComponent
  },
  {
    path: 'cines',
    component: IndiceCinesComponent
  },
  {
    path: 'cines/crear',
    component: CrearCinesComponent
  },
  {
    path: 'cines/editar/:id',
    component: EditarCinesComponent
  },
  {
    path: 'peliculas/crear',
    component: CrearPeliculaComponent
  },
  {
    path: 'peliculas/editar/:id',
    component: EditarPeliculaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
