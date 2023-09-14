import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnunciosdocentePage } from './anunciosdocente.page';

const routes: Routes = [
  {
    path: '',
    component: AnunciosdocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnunciosdocentePageRoutingModule {}
