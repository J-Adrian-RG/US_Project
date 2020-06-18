import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

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

}
