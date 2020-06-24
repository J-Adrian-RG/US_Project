import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

import { AdminService } from '../service/admin.service';

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
    public adminService: AdminService
    ) { }

    // Objeto 'maestro'
    maestro = { 
      Name:  '',
      Passw: '' 
    }

  ngOnInit() {
  }

    getLogin(){
      this.adminService.getMaestro(this.maestro).then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });
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
