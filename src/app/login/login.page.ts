import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
// imports agregados
import { AdminService } from '../service/admin.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showPassword=false;
  passwordToggleIcon= 'eye-outline';
  constructor(public router: Router, 
    private navCtrl: NavController,
    private menu: MenuController,
    public adminService: AdminService,
    private storage: Storage,
    ) {
      
    }

    // Objeto 'maestro'
    Maestro = { 
      Num_employe:  '',
      Passw: '' 
    }

  ngOnInit() {
    
  }

    async getLogin(){
      await this.adminService.getLogin(this.Maestro).then((res)=>{
        this.storage.set("ID", this.Maestro.Num_employe)
      });
      this.storage.set("Session", true);
    }

    togglePassword(): void {
      this.showPassword = !this.showPassword;
      if(this.passwordToggleIcon == 'eye-outline'){
        this.passwordToggleIcon = 'eye-off-outline';
      }else{
        this.passwordToggleIcon = 'eye-outline';
      }
    }

}
