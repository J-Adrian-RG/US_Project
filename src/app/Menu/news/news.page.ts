import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(
    public adminService: AdminService
  ) { 
    this.getAllEvents();
  }

  ngOnInit() {
  }

  Events: any;
  
  async getAllEvents(){
    await this.adminService.getEvent()
    .then(data  =>  {
        this.Events = data
    },  (err) =>  {
      console.log(err);
    });
  };

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.getAllEvents();
  }

}
