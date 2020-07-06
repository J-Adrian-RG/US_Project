import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalHPage } from 'src/app/components/modal-h/modal-h.page';
import { AdminService } from 'src/app/service/admin.service';

// Firebase
import { AngularFireStorage } from '@angular/fire/storage';
import {  finalize  } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private fireStorage: AngularFireStorage,
    public  adminService: AdminService
  ) { 
    this.getAllSchedule();
  }

  ngOnInit() {
  }

  // FileUrl Firebase
  uploadPercent: Observable<number>;
  FileUrl: Observable<string> ;
  FileName:string;

  Horarios:any;
  
  Horario = {
    FileName: '',
    Token: '',
    Num_employe: ''
  }

  slideOptions = {
    zoom: {
      maxRatio: 5
    }
  };

  async openNewSchedule(){
    const modal = await this.modalCtrl.create({
      component: ModalHPage,
      cssClass: 'dialog-modal',
    });
    modal.present();
  };

  async getAllSchedule(){
    await this.adminService.getHorarios(this.Horarios)
    .then(  data  =>  {
        this.Horarios = data
    },  (err) =>  {
      console.log(err);
    });
  };

  updateData(){
    this.adminService.putHorario(this.Horario)
    .then((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  async onUpload(data:any){
    const file = data.target.files[0];
    const filepath = `horarios/${data.target.files[0].name}`;
    const ref = this.fireStorage.ref(filepath);
    const task = this.fireStorage.upload(filepath,file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => 
      this.FileUrl = ref.getDownloadURL()
      ))
        .subscribe();
        this.FileName = data.target.files[0].name;
          
  }

}
