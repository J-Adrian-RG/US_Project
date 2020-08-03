import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router,
    private nav: NavController
  ) { }

  ngOnInit() {
  }

  async Finish(){
    this.storage.set("Tutorial Complete", true);
    location.reload();
  }

}
