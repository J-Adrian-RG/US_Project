import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import { TutorialguardGuard } from 'src/app/guards/tutorialguard.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'calendar',
        loadChildren: () => 
        import('../calendar/calendar.module').then( m => m.CalendarPageModule),
      },
      {
        path: 'news',
        loadChildren: () => 
        import('../news/news.module').then( m => m.NewsPageModule),
      },
      {
        path: 'schedule',
        loadChildren: () => 
        import('../schedule/schedule.module').then( m => m.SchedulePageModule),
        
      },
      {
        path: 'theirschedule',
        loadChildren: () => 
        import('../theirschedule/theirschedule.module').then( m => m.TheirschedulePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
