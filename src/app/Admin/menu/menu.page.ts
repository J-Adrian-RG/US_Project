import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  selectedIndex = 0;
  public pages = [
    {
      title: 'Maestros',
      url: '/maestros',
      icon: 'people'
    },
    {
      title: 'Horarios',
      url: '/horarios',
      icon: 'time'
    },
    {
      title: 'Eventos',
      url: '/eventos',
      icon: 'today'
    },
    {
      title: 'Calendario',
      url: '/calendario',
      icon: 'calendar'
    }
  ];
  ngOnInit() {
  }


  
  logout(){
    location.reload();
  }

  
}
