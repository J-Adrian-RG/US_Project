import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class TutorialguardGuard implements CanActivate {

  constructor( 
    private storage: Storage, 
    private router: Router
    ){}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Promise<boolean> {
      const isComplete = await this.storage.get('Tutorial Complete');
      if(!isComplete){
        this.router.navigateByUrl('/tutorial');
      }
      return isComplete;
  }
  
}
