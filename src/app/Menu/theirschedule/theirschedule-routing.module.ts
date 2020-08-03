import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheirschedulePage } from './theirschedule.page';

const routes: Routes = [
  {
    path: '',
    component: TheirschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheirschedulePageRoutingModule {}
