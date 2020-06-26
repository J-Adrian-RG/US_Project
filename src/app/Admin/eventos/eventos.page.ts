import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalEPage } from 'src/app/components/modal-e/modal-e.page';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openNewEvent(){
    const modal = await this.modalCtrl.create({
      component: ModalEPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  };

}
