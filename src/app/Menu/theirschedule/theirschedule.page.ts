import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/service/admin.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-theirschedule',
  templateUrl: './theirschedule.page.html',
  styleUrls: ['./theirschedule.page.scss'],
})
export class TheirschedulePage implements OnInit {

  constructor(
    public adminService: AdminService,
    private storage: Storage
  ) {
    this.getSchedules();
  }

  ngOnInit() {
  }

  Horarios:any;

  slideOptions = {
    zoom: {
      maxRatio: 3
    }
  };
  
  async getSchedules(){
    await this.adminService.getMaestros(this.Horarios)
    .then(data  =>  {
        this.Horarios = data
    },  (err) =>  {
      console.log(err);
    });
  };

}
