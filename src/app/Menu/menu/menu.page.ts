import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  maestro:any;

  constructor(
    public adminService: AdminService,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.getOne();
  }
  ngOnInit() {
  }

  selectedIndex = 0;
  public appPages = [
    {
      title: 'Mi Horario',
      url: '/menu/schedule',
      icon: 'today'
    },
    {
      title: 'Horarios',
      url: '/menu/theirschedule',
      icon: 'albums'
    },
    {
      title: 'Eventos',
      url: '/menu/news',
      icon: 'newspaper'
    },
    {
      title: 'Calendario',
      url: '/menu/calendar',
      icon: 'calendar'
    }
  ];

  async getOne(){
    await this.storage.get('ID').then((data)=>{
      this.adminService.getMaestro(data)
      .then(data  =>  {
        this.maestro = data
      },  (err) =>  {
        console.log(err);
      });
    });
  };


  logout(){
    location.reload();
  }

}
