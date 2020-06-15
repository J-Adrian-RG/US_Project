import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public appPages = [
    {
      title: 'Horario',
      url: '/schedule',
      icon: 'calendar'
    },
    {
      title: 'Eventos',
      url: '/news',
      icon: 'newspaper'
    },
    {
      title: 'Calendario',
      url: '/calendar',
      icon: 'today'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
