import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  constructor(private authService: AuthenticateService, private router:Router) { }

  ngOnInit(): void {
  }

 
    
    
  onSubmit(data:any){

    
    
    this.authService.postLogin(data).subscribe( response =>{
      localStorage.setItem('token',response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      console.log(response)
    })

    if(this.authService.checkToken()){
      console.log("User loggedin successfully");

      this.router.navigateByUrl('/home');
    
     }

    

  
  }
}
