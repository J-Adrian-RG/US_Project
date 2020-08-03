import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {NavController} from '@ionic/angular';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    public adminService: AdminService
  ) {
    this.initializeApp();
    this.getAllSchedule();
  }

  Horarios:any;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.navCtrl.navigateRoot('/login');
  }

  async getAllSchedule(){
    await this.adminService.getHorarios(this.Horarios)
    .then(  data  =>  {
        this.Horarios = data
    },  (err) =>  {
      console.log(err);
    });
  };
  ngOnInit() {
  }
}

