import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalHPage } from 'src/app/components/modal-h/modal-h.page';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openNewSchedule(){
    const modal = await this.modalCtrl.create({
      component: ModalHPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  };


}
