import { Component, OnInit } from '@angular/core';
// Servicios
import { ModalController } from '@ionic/angular';
import {  AdminService } from '../../service/admin.service';
// Firebase
import { AngularFireStorage } from '@angular/fire/storage';
import {  finalize  } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-modal-m',
  templateUrl: './modal-m.page.html',
  styleUrls: ['./modal-m.page.scss'],
})
export class ModalMPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private fireStorage: AngularFireStorage,
    public adminService: AdminService
    ) {
    }

  ngOnInit() {
  }

  // FileUrl Firebase
  uploadPercent: Observable<number>;
  FileUrl: Observable<string> ;
  FileName:string;

  // Objeto 'maestro'
  maestro = { 
    Name:  '',
    Lastname:  '',
    Num_employe:  '',
    Passw: '',
    File_Name: '',
    Token:  ''
  }

    // Cerrar Modal
  async closeModal(){
    await this.modalCtrl.dismiss();
  }

    // Funcion Agregar Maestro
    addData(){
      this.adminService.postMaestro(this.maestro).then((res)=>{
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
