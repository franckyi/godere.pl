import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GrondBlackComponent } from './views/works/grond-black/grond-black.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'works',
    component: GrondBlackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
