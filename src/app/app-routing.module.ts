import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {JokeDetailsPageComponent} from "./pages/joke-details-page/joke-details-page.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'jokes',
    pathMatch: 'full'
  },
  {
    path: 'jokes',
    component: HomePageComponent,
  },
  {
    path: 'jokes/:id',
    component: JokeDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
