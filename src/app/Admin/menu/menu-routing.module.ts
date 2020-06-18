import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'horarios',
        loadChildren: () => import('../horarios/horarios.module').then( m => m.HorariosPageModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then( m => m.EventosPageModule)
      },
      {
        path: 'maestros',
        loadChildren: () => import('../maestros/maestros.module').then( m => m.MaestrosPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('../calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'maestros',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
