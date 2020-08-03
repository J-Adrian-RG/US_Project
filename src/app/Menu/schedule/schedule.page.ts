import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(
    private router: Router,
    public adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private storage: Storage
    ) {
        this.getOne();
    }

  ngOnInit() {
  }

  Maestro:any;

  slideOptions = {
    zoom: {
      maxRatio: 3
    }
  };


  async getOne(){
    await this.storage.get('ID').then((data)=>{
      this.adminService.getHorario(data)
      .then(data  =>  {
        this.Maestro = data
      });
    });
  };

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.getOne();
  }


}
