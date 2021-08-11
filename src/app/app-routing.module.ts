import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlablaComponent } from './components/blabla/blabla.component';
import { DetailsComponent } from './components/details/details.component';
import { VideogamesComponent } from './components/videogames/videogames.component';

const routes: Routes = [
  {
    path: '',
    component: BlablaComponent,
  },
  {
    path: 'blabla',
    component: BlablaComponent,
  },
  {
    path: 'videogames',
    component: VideogamesComponent,
  },
  {
    path: 'search/:game-search',
    component: VideogamesComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
