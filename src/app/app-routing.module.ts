import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'certificados',
    loadChildren: () => import('./pages/certificados/certificados.module').then( m => m.CertificadosPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'certificado',
    loadChildren: () => import('./pages/certificado/certificado.module').then( m => m.CertificadoPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'edicion',
    loadChildren: () => import('./pages/edicion/edicion.module').then( m => m.EdicionPageModule)
  },
  {
    path: 'menudocente',
    loadChildren: () => import('./pages/menudocente/menudocente.module').then( m => m.MenudocentePageModule)
  },
  {
    path: 'asistenciadocente',
    loadChildren: () => import('./pages/asistenciadocente/asistenciadocente.module').then( m => m.AsistenciadocentePageModule)
  },
  {
    path: 'horariodocente',
    loadChildren: () => import('./pages/horariodocente/horariodocente.module').then( m => m.HorariodocentePageModule)
  },
  {
    path: 'cursosdocente',
    loadChildren: () => import('./pages/cursosdocente/cursosdocente.module').then( m => m.CursosdocentePageModule)
  },
  {
    path: 'anunciosdocente',
    loadChildren: () => import('./pages/anunciosdocente/anunciosdocente.module').then( m => m.AnunciosdocentePageModule)
  },
  {
    path: 'seccionesdocente',
    loadChildren: () => import('./pages/seccionesdocente/seccionesdocente.module').then( m => m.SeccionesdocentePageModule)
  },
  {
    path: 'iniciarclase',
    loadChildren: () => import('./pages/iniciarclase/iniciarclase.module').then( m => m.IniciarclasePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
