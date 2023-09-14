import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciadocentePage } from './asistenciadocente.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciadocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciadocentePageRoutingModule {}
