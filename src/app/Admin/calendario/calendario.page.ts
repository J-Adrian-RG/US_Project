import { Component, OnInit } from '@angular/core';
// Imports Agregados
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/service/admin.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {  finalize  } from 'rxjs/operators'

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(
    private fireStorage: AngularFireStorage,
    public adminService: AdminService
  ) {
    this.getCalendar();
    }

  ngOnInit() {
  }

  uploadPercent: Observable<number>;
  FileUrl: Observable<string> ;
  FileName:string;
  
  slideOptions = {
    zoom: {
      maxRatio: 3
    }
  };

  Calendar: any;

  Calendario = {
    FileName : "",
    Token : "",
  }


  async getCalendar(){
    await this.adminService.getCalendar(this.Calendar)
    .then(  data  =>  {
        this.Calendar = data
    },  (err) =>  {
      console.log(err);
    });
  };


  updateData(){
    this.adminService.putCalendar(this.Calendario)
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
