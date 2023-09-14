import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariodocentePage } from './horariodocente.page';

const routes: Routes = [
  {
    path: '',
    component: HorariodocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorariodocentePageRoutingModule {}
