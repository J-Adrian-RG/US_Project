import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MenuGuard implements CanActivate {
  constructor( 
    private router: Router,
    private storage: Storage
    ){}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Promise<boolean> {
      const Session = await this.storage.get('Session');
      if(!Session){
        this.router.navigateByUrl('/login');
      }
      return Session;
  }
  
}
