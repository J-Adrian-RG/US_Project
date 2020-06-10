import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./Menu/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./Menu/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./Menu/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
