import { Injectable } from '@angular/core';
import {  CanActivate ,Router} from '@angular/router';

import{AuthenticateService} from '../authenticate.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticateService, private router:Router){}

  canActivate()
   {
     if(this.auth.checkToken()){
      return true;
     }
     else
     {
      this.router.navigateByUrl('login');
      return false;
    
     }
    
  }
  
}
