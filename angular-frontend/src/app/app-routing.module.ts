import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [{ path: 'alumnos', loadChildren: () => import('./features/alumnos/alumnos.module').then(m => m.AlumnosModule), canActivate: [authGuard] }, 
  { path: 'cursos', loadChildren: () => import('./features/cursos/cursos.module').then(m => m.CursosModule),canActivate: [authGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
